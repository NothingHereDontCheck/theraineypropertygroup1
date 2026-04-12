# The Rainey Property Group

**New Construction Specialists — Atlanta Metro Georgia**

A static marketing website introducing Georgia buyers to new construction communities within a 50-mile radius of Atlanta. All leads are directed to the CRM at [agent.reliverealty.com/MetroLocators](https://agent.reliverealty.com/MetroLocators).

---

## Project Structure

```
rainey-property-group/
├── public/               # Served by Cloudflare Pages
│   ├── index.html        # Main page
│   ├── _headers          # Cloudflare security & cache headers
│   ├── _redirects        # Cloudflare redirect rules
│   └── assets/
│       ├── styles.css    # All styles
│       └── main.js       # Scroll animations & interactions
├── src/                  # Reserved for future build pipeline
│   └── README.md
├── server.js             # Local development server (Node.js)
├── wrangler.toml         # Cloudflare Pages / Workers config
├── package.json
├── .gitignore
└── README.md
```

---

## Local Development

No build step required. Just run:

```bash
node server.js
# → http://localhost:3000
```

Or install dependencies and use the Wrangler preview (mirrors Cloudflare Pages):

```bash
npm install
npm run preview
# → http://localhost:8788
```

---

## Deployment (Cloudflare Pages)

### Option A — Connect GitHub repo (recommended)

1. Push this repo to GitHub.
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com).
3. Go to **Workers & Pages → Create → Pages → Connect to Git**.
4. Select this repository.
5. Set:
   - **Build command:** *(leave blank — no build step)*
   - **Build output directory:** `public`
6. Click **Save and Deploy**.

Every push to `main` will trigger an automatic deployment.

### Option B — Direct upload via Wrangler CLI

```bash
npm install
npx wrangler pages deploy public --project-name=rainey-property-group
```

---

## Custom Domain

1. In Cloudflare Pages, go to your project → **Custom domains**.
2. Add your domain (e.g., `raineyproperty.com`).
3. Cloudflare will provision an SSL certificate automatically.

---

## Tech Stack

- Plain HTML5, CSS3, JavaScript (no framework, no build step)
- Hosted on **Cloudflare Pages** (free tier)
- Fonts: Cormorant Garamond + DM Sans via Google Fonts
- CRM: [ReLive Realty — MetroLocators](https://agent.reliverealty.com/MetroLocators)
