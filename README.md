# personal-site

Static portfolio themed as a cloud architecture console. No build step, no dependencies.

- Edit content: `content.js` (the only file you need to touch). Empty fields/lists hide their section.
- Resume PDF: put it next to `index.html` as `resume.pdf` (or change `resumeUrl`).
- Preview: open `index.html` in a browser, or `python -m http.server` and visit http://localhost:8000.

## Deploy

Any static host works. Upload `index.html`, `style.css`, `main.js`, `content.js` (and `resume.pdf`).

- GitHub Pages: push to a repo, enable Pages on the main branch.
- S3 + CloudFront (fits the theme): `aws s3 sync . s3://<bucket> --exclude ".git/*" --exclude README.md`, then put a CloudFront distribution in front of the bucket.
