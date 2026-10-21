# Stonesyz website

Corporate site for **Stonesyz Private Limited** at https://stonesyz.com, the parent company of Panzo.
Pages: `/` (who we are, Panzo products, contact form) and `/about` (moved from thepanzo.com/about,
reworded for the parent company). No database, no login.

```bash
npm install
npm run dev     # http://localhost:3200
npm run lint && npx tsc --noEmit && npm test && npm run build
```

- Shared facts (legal name, email, products, markets, nav): `components/site.ts`.
- Identity: warm red / ember / saffron on cream with maroon bands, Plus Jakarta Sans, stacked-stones mark (`components/Logo.tsx`). Deliberately different from Panzo (crimson + Poppins). Tokens and motion in `app/globals.css` (light + dark; motion off under reduced motion).
- Product screenshots in `public/product/` are the demo-data images already public on thepanzo.com.

## Contact form

`app/actions/contact.ts` emails each message to the inbox; validation is `lib/contactInput.ts`
(unit tested). There is no database, so if email is not set up the visitor sees an error with the
email address, never a false "sent". Set these in the host (never in git):

| Var | Needed | Default |
|---|---|---|
| `SMTP_HOST` | yes | none |
| `SMTP_USER`, `SMTP_PASS` | yes | none |
| `SMTP_PORT` | no | `587` (STARTTLS required) |
| `SMTP_FROM`, `SMTP_TO` | no | `hello@stonesyz.com` |

Throttle: 5 messages per IP per 10 minutes, in memory (per server instance, best effort).

## Hosting

Planned: Vercel, with the domain's DNS kept at Cloudflare. **Not deployed yet; deploy only on the owner's OK.**
