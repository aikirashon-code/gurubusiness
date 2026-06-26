# GuruBusiness Digital Ecosystem

Premium notary services platform for Trenton, NJ. Built with Design Components (DC) — no build step required.

## 📂 Project Structure

```
.
├── index.html                          # Landing page (directory listing)
├── GuruBusiness Home.dc.html           # Homepage with pricing engine
├── GuruBusiness Mobile Notary.dc.html
├── GuruBusiness RON.dc.html
├── GuruBusiness Apostille.dc.html
├── GuruBusiness B2B.dc.html
├── GuruBusiness Article 1.dc.html
├── GuruBusiness Article 2.dc.html
├── support.js                          # DC runtime (required)
└── README.md                           # This file
```

## 🚀 Deployment to Cloudflare Pages

1. **Push this repo to GitHub** (all files included)

2. **Log in to Cloudflare** at [dash.cloudflare.com](https://dash.cloudflare.com)

3. **Create a Pages project:**
   - Click **Pages** → **Create a project** → **Connect Git**
   - Select your GitHub repo
   - **Build command:** (leave empty)
   - **Build output directory:** (leave empty)
   - Click **Save and deploy**

4. **Set your domain:**
   - In Cloudflare, go to your Pages project
   - Click **Custom domains**
   - Add your domain (e.g., `gurubusiness.com`)

That's it. Cloudflare automatically handles HTTPS, caching, and CDN delivery.

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
