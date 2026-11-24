GoCareer website — static build
==============================

Upload EVERYTHING in this folder (index.html, assets/, media/, the page
folders, hero.mp4, favicon.png) to your host's main web folder
(public_html, wwwroot, or the Netlify/Hostinger/cPanel file manager root).

What you get
- 7 pages, each with its own real HTML file:
  /, /features, /how-it-works, /platform, /testimonials, /privacy-policy, /terms
- Every photo, video and caption is inside media/ — nothing loads from Lovable.
- assets/ holds the compiled CSS/JS; hero.mp4 is the homepage video.

Notes
- No build step, no server code, no Node needed. Plain static hosting is enough.
- If a page address without the trailing slash (e.g. /features) ever shows 404,
  add this one line to .htaccess (Apache) or the equivalent host rewrite:
      RewriteRule ^([a-z-]+)/?$ /$1/index.html [L]
- Edit nothing else. The page links work as they are.
