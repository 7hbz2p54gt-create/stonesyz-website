# Stonesyz website

Corporate site for **Stonesyz Private Limited** at https://stonesyz.com, the company behind Panzo.
One static page (about, Panzo products, contact). No database, no login, no secrets.

```bash
npm install
npm run dev     # http://localhost:3200
npm run lint && npx tsc --noEmit && npm run build
```

- Shared facts (legal name, email, products, markets): `components/site.ts`.
- Colours: `app/globals.css` tokens, light and dark.
- Domain is registered at Cloudflare. Not deployed yet; hosting is an owner decision.
