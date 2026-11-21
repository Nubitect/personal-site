// All site content lives here. Edit this file only; main.js renders it.
// Leave a field as "" or [] to hide it.
window.SITE = {
  name: "Your Name",
  title: "Cloud & Security Engineer",
  region: "home-01",
  summary:
    "Student / engineer focused on cloud infrastructure and security. I build things, break things in competitions, and write it all down.",
  resumeUrl: "resume.pdf", // drop your PDF next to index.html

  experience: [
    {
      role: "Cloud Engineering Intern",
      org: "Company Name",
      location: "City, ST",
      start: "May 2025",
      end: "Present",
      bullets: [
        "Migrated X workloads to containers, cutting deploy time from 40 to 5 minutes.",
        "Wrote Terraform modules for VPC, IAM and logging used by 6 teams.",
      ],
      tags: ["AWS", "Terraform", "Kubernetes"],
    },
    {
      role: "IT Security Assistant",
      org: "University IT",
      location: "City, ST",
      start: "Sep 2023",
      end: "May 2025",
      bullets: ["Triaged SIEM alerts and hardened 200+ endpoints."],
      tags: ["Splunk", "Linux", "Windows"],
    },
  ],

  competitions: [
    {
      name: "Collegiate Cyber Defense Competition — Regionals",
      date: "2025-03",
      result: "1st place",
      role: "Team captain, Linux lead",
      details: "Defended a corporate network against a live red team.",
    },
    {
      name: "National Cyber League — Spring",
      date: "2024-04",
      result: "Top 5%",
      role: "Individual",
      details: "",
    },
  ],

  projects: [
    {
      name: "homelab-k8s",
      description: "Three-node k3s cluster with GitOps, monitoring and automated TLS.",
      tags: ["k3s", "ArgoCD", "Prometheus"],
      repo: "https://github.com/you/homelab-k8s",
      demo: "",
    },
    {
      name: "ctf-writeups",
      description: "Write-ups for web, pwn and forensics challenges.",
      tags: ["Python", "Ghidra"],
      repo: "https://github.com/you/ctf-writeups",
      demo: "",
    },
  ],

  // Rendered as an IAM-style policy: each key becomes one statement.
  skills: {
    Languages: ["Python", "Go", "Bash", "SQL"],
    Cloud: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
    Security: ["Incident response", "Linux hardening", "Wireshark", "Burp Suite"],
  },

  education: [
    { school: "University Name", degree: "B.S. Computer Science", when: "2022 – 2026", note: "Minor in Cybersecurity" },
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", year: "2025" },
    { name: "CompTIA Security+", year: "2024" },
  ],

  contact: [
    { label: "email", href: "mailto:you@example.com", text: "you@example.com" },
    { label: "github", href: "https://github.com/you", text: "github.com/you" },
    { label: "linkedin", href: "https://linkedin.com/in/you", text: "linkedin.com/in/you" },
  ],
};
