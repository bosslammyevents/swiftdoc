# SwiftDoc Solutions Ltd — Website

Static website (HTML + CSS + JS). No build step, no frameworks.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `services.html` | All services (categories open a list → WhatsApp enquiry) |
| `faq.html` | FAQ page |
| `contact.html` | Contact page (24/7, quick WhatsApp message form) |
| `styles.css` | All styling (shared by every page) |
| `app.js` | **WhatsApp number + services list** + page logic |
| `logo.png`, `logo-white.png` | Logo (header / footer) |
| `favicon.png`, `apple-touch-icon.png` | Browser tab + phone home-screen icons |
| `netlify.toml` | Netlify settings (caching, security headers, clean URLs) |

## Editing

**WhatsApp number** — top of `app.js`, `CONFIG.whatsapp` (international format, no `+`, e.g. `2348061360039`).

**Services** — `SERVICES` list in `app.js`. Each category looks like:

```js
{ name:"Sworn Affidavits", icon:"stamp", desc:"Court affidavits for personal and official use.", items:[
  ["Change of Name", ""],                       // [service name, optional short note]
  ["Other Affidavits", "Tell us what it's for."]
]},
```

- Add a service → add a `["Name", ""]` line inside `items`.
- Add a category → copy a whole `{ ... },` block. Available icons: `building, cal, cog, stamp, news, id, shield, clip, badge, passport, baby, rings, tm, pin, car, tax`.
- The services page, search and contact-form dropdown all update automatically.

**Phone / address in the footer** — written directly in each HTML file's `<footer>` (search for `0806 136 0039` / `Opebi`).

## Preview locally (VS Code)

Install the **Live Server** extension → right-click `index.html` → **Open with Live Server**.
(Opening the file by double-click also works.)

## Deploy (GitHub → Netlify)

1. Create a GitHub repo and push this folder.
2. Netlify → **Add new site → Import an existing project** → pick the repo.
   Build command: *(leave empty)* · Publish directory: `.`
3. Netlify → **Domain management → Add a domain** → enter the client's domain.
4. Whogohost client area → **Domains → Manage DNS** (nameservers must be `nsa.whogohost.com` / `nsb.whogohost.com`):
   - `A` record · host `@` · value `75.2.60.5`
   - `CNAME` record · host `www` · value `<your-site>.netlify.app`
5. Wait for DNS (up to 24h) → Netlify issues HTTPS automatically.

Every `git push` after that updates the live site.
# swiftdoc
