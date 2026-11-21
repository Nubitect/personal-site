const S = window.SITE;

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const tags = (list) => (list || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
const link = (href, text) =>
  href ? `<a href="${esc(href)}"${/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ""}>${esc(text)}</a>` : "";
// Fake but stable resource id, e.g. "i-3f9a12c0", so cards look like console resources.
const rid = (prefix, s) => {
  let h = 2166136261;
  for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return `${prefix}-${(h >>> 0).toString(16).padStart(8, "0")}`;
};
const fill = (id, list, render) => {
  const el = document.getElementById(id);
  if (!list || !list.length) return el.closest(".svc, .panel")?.setAttribute("hidden", "");
  el.innerHTML = list.map(render).join("");
};

document.title = `${S.name} · ${S.title}`;
document.querySelectorAll("[data-bind]").forEach((el) => (el.textContent = S[el.dataset.bind] ?? ""));
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("deployed").textContent = new Date(document.lastModified).toISOString().slice(0, 10);
const resume = document.getElementById("resume-link");
S.resumeUrl ? (resume.href = S.resumeUrl) : resume.remove();

fill("experience-list", S.experience, (x) => {
  const live = /present/i.test(x.end);
  return `<article class="card">
    <div class="card-top"><code>${rid("i", x.role + x.org)}</code><span class="state ${live ? "on" : ""}">${live ? "running" : "stopped"}</span></div>
    <h3>${esc(x.role)}</h3>
    <p class="meta">${esc(x.org)}${x.location ? " · " + esc(x.location) : ""}</p>
    <p class="meta mono">uptime: ${esc(x.start)} → ${esc(x.end)}</p>
    <ul>${(x.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    <div class="tags">${tags(x.tags)}</div>
  </article>`;
});

fill("competitions-list", S.competitions, (c) => `<li>
    <time class="mono">${esc(c.date)}</time>
    <div><strong>${esc(c.name)}</strong>
      <p class="meta">${esc(c.role)}</p>
      ${c.details ? `<p>${esc(c.details)}</p>` : ""}
    </div>
    <span class="result">${esc(c.result)}</span>
  </li>`);

fill("projects-list", S.projects, (p) => `<article class="card">
    <div class="card-top"><code>${rid("svc", p.name)}</code><span class="state on">deployed</span></div>
    <h3 class="mono">${esc(p.name)}</h3>
    <p>${esc(p.description)}</p>
    <div class="tags">${tags(p.tags)}</div>
    <p class="links">${link(p.repo, "source")} ${link(p.demo, "live demo")}</p>
  </article>`);

// Skills as a syntax-highlighted IAM policy document.
const str = (s) => `<span class="s">"${esc(s)}"</span>`;
const key = (k) => `<span class="k">"${k}"</span>`;
const statements = Object.entries(S.skills || {}).map(([sid, items]) =>
  `    {\n      ${key("Sid")}: ${str(sid)},\n      ${key("Effect")}: ${str("Allow")},\n      ${key("Action")}: [${items.map(str).join(", ")}]\n    }`);
if (statements.length)
  document.getElementById("skills-policy").innerHTML =
    `{\n  ${key("Version")}: ${str("2012-10-17")},\n  ${key("Statement")}: [\n${statements.join(",\n")}\n  ]\n}`;
else document.getElementById("skills").hidden = true;

fill("education-list", S.education, (e) =>
  `<li><span class="mono">${esc(e.when)}</span><div><strong>${esc(e.degree)}</strong><p class="meta">${esc(e.school)}${e.note ? " · " + esc(e.note) : ""}</p></div></li>`);
fill("cert-list", S.certifications, (c) =>
  `<li><span class="mono">${esc(c.year)}</span><div><strong>${esc(c.name)}</strong></div></li>`);
if (!S.education?.length && !S.certifications?.length) document.getElementById("education").hidden = true;

fill("contact-list", S.contact, (c) =>
  `<li><span class="verb">GET</span><code>/${esc(c.label)}</code><span class="arrow" aria-hidden="true">→</span>${link(c.href, c.text)}</li>`);
