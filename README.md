# GuruBusiness Digital Ecosystem

Premium notary services platform for Trenton, NJ. Built with Design Components (DC) — no build step required.

## 📂 Project Structure

```
.
├── index.html                      # Landing page (directory listing)
├── GuruBusiness Home.dc.html       # Homepage with pricing engine
├── GuruBusiness Mobile Notary.dc.html
├── GuruBusiness RON.dc.html
├── GuruBusiness Apostille.dc.html
├── GuruBusiness B2B.dc.html
├── GuruBusiness Article 1.dc.html
├── GuruBusiness Article 2.dc.html
├── support.js                      # DC runtime (required)
├── wrangler.toml                   # Cloudflare Workers config
├── index.js                        # Workers entrypoint
├── _redirects                      # Netlify/Cloudflare routing
└── _headers                        # Security & cache headers
```

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. **Create a Cloudflare account** at [cloudflare.com](https://dash.cloudflare.com)

2. **Connect your GitHub repo** or upload files directly:
   - Log in to Cloudflare Dashboard
   - Navigate to **Pages** → **Create a project**
   - Select **Upload assets** or **Connect Git**
   - Point build command to: (leave empty — static files only)
   - Root directory: `/`

3. **Set custom domain** in Cloudflare DNS settings

4. **Configure caching** (automatic via `_headers`)

### Cloudflare Workers (Advanced)

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate:**
   ```bash
   wrangler login
   ```

3. **Update `wrangler.toml`** with your Cloudflare credentials:
   ```toml
   account_id = "YOUR_ACCOUNT_ID"
   zone_id = "YOUR_ZONE_ID"
   ```

4. **Deploy:**
   ```bash
   wrangler deploy
   ```

### GitHub Pages (Free Alternative)

1. Push to GitHub
2. Enable **Pages** in repo settings → **Deploy from branch**
3. Select `main` branch, `/` root directory
4. Cloudflare will point your domain

## 📋 Before Launch

Update across all 7 `.dc.html` files:
- `609-XXX-XXXX` → Your real phone number
- `Book Online →` button → Stripe/booking backend URL
- B2B form submission → CRM/email handler

## 🔒 Security

- **HTTPS enforced** by Cloudflare (automatic)
- **CSP headers** set in `_headers`
- **XSS protection** enabled
- **Cache-Control** headers prevent stale content
- **No sensitive data** stored in URLs

## 📊 SEO

Each page includes:
- Meta descriptions
- Canonical tags
- Semantic HTML (H1-H6 hierarchy)
- Alt text for images
- JSON-LD schema (add as needed)

To improve rankings:
1. Add Google Search Console verification
2. Submit XML sitemap to Google/Bing
3. Build internal linking strategy
4. Monitor Core Web Vitals in Cloudflare Analytics

## 🎨 Design System

**Colors:**
- Primary Blue: `#0052FF`
- Dark Navy: `#101E33`
- Light Background: `#F4F7FA`
- White: `#FFFFFF`

**Typography:**
- Headers: Manrope (800, 700, 600)
- Body: Inter (400, 500, 600)

**Spacing:**
- Base unit: 8px
- Padding/margin scale: 8, 12, 16, 24, 32, 48, 56, 88

## 🛠️ Development

Each `.dc.html` file is a **Design Component** — standalone, fully self-contained HTML with embedded CSS and vanilla JS. Open any file directly in a browser.

No npm, no build step, no dependencies beyond `support.js`.

## 📞 Support

- **Phone:** 609-XXX-XXXX
- **Email:** (add support email)
- **Address:** Trenton, NJ 08608

---

© 2026 Guru Business Solutions. N.J.S.A. 52:7-10 et seq. Compliant.
