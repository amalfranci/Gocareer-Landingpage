# GoCareer Landing Page

Public marketing site for **GoCareer**.

## UI source

The live UI is the static build from `gocareer-website` (exact design), served from the `site/` folder.

- No Vite/React build step for production
- Pages: `/`, `/features`, `/how-it-works`, `/platform`, `/testimonials`, `/privacy-policy`, `/terms`, `/deleteMyAccount`

## Kept from previous landing app

| Item | Status |
|------|--------|
| Play Store / App Store / Recruiter / Candidate app URLs | Same production redirects (already in the new UI) |
| Privacy Policy content | **Current legal text** from the old React page |
| Terms and Conditions content | **Current legal text** from the old React page |
| Delete My Account | Kept at `/deleteMyAccount` → `POST https://api.gocareer.co/auth/candidate/delete-account` |
| Legacy routes | `/?page=privacy-policy` and `/?page=terms-and-conditions` redirect to the new paths |

## Redirect URLs (production)

| Action | URL |
|--------|-----|
| Play Store | `https://play.google.com/store/apps/details?id=com.gocareer.android` |
| App Store | `https://apps.apple.com/in/app/gocareer/id6785873881` |
| Recruiter login | `https://recruiter.gocareer.co/login` |
| Candidate app | `https://app.gocareer.co/` |
| Delete account API | `https://api.gocareer.co/auth/candidate/delete-account` |

## Local preview

```bash
npm run dev
```

Open **http://localhost:8080**

(This serves the static `site/` folder. There is no Vite build — `npm install` is not required.)

## Deploy

Push to `main`. GitHub Actions copies `site/*` to the EC2 landing folder and reloads Nginx.

Legacy React sources (reference only) live under `_legacy-react/`.
