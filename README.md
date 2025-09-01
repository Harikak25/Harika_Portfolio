# HK Portfolio — macOS Mock with CI/CD, Tests, Security

## Setup
1) Put assets in `public/`:
```
public/dock/{finder.png,launchpad.png,notes.png,imessage.png,terminal.png,trash.png}
public/files/{folder.png,pdf.png,download.png}
public/icons/apple-logo.png
public/background.jpg  # or background.png
public/resume.pdf
public/certs/<your-cert>.pdf
```
2) Install and run:
```
npm install
npm run dev
```

## Tests
- Unit: `npm run test:unit` (Jest, 90% coverage enforced)
- E2E: `npm run test:e2e` (Playwright)
- Full: `npm test`

## CI/CD
- `.github/workflows/ci.yml` → unit coverage + build + e2e
- `.github/workflows/security.yml` → dependency review, npm audit, CodeQL
- `.github/workflows/deploy-vercel.yml` → Vercel preview on PR, prod on main
