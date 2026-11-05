# Guangzhou KM Trading Co., Ltd. — Multilingual B2B sourcing platform starter

A responsive Next.js 14 starter website for Guangzhou KM Trading Co., Ltd., with English, Simplified Chinese, and Amharic language selection.

## Run locally

Requirements: Node.js 18.17+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Import this repository into Vercel. Framework preset: Next.js. Root directory: `./`. Build command: `npm run build`.

## Included

- Responsive landing page with navy, white, and gold brand palette
- Five service areas: Import & Export, Freight & Logistics, Product Sourcing, Supplier Verification, Business Tour
- English, Simplified Chinese, and Amharic copy; language preference is saved in the browser
- Buyer inquiry form that prepares an email via the visitor's mail application
- Basic page metadata

## Important limitations

This is a front-end starter, not yet a complete marketplace or production-ready business system. The inquiry form does **not** save submissions to a database. Manufacturer registration, product upload, admin approval, authentication, spam protection, and a real inquiry-management dashboard still need to be implemented and tested before the site is used operationally.

The contact address in the starter (`info@guangzhoukm.com`) is a placeholder; replace it with the company's verified email before publishing. No Supabase credentials are required for this starter.

## Environment variables

`.env.example` is only a template. Never commit real database passwords, API keys, or secrets to GitHub.


## Supabase connection

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in your Vercel environment variables. The buyer inquiry form writes to the `public.inquiries` table. Row Level Security must remain enabled. Never expose a Supabase secret/service-role key in browser code.
