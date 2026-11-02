# Guangzhou KM Trading Co., Ltd. — multilingual B2B sourcing platform starter

This is the first frontend starter for the planned dynamic platform. It includes a responsive homepage, product-category cards, manufacturer promotion section, services, and a visual inquiry form.

## Confirmed design and language decisions
- Brand: GUANGZHOU KM TRADING CO., LTD.; Chinese name: 广州匡茂贸易有限公司.
- Motto: Built on Trust, Driven by Reliability.
- Colors: navy blue, white, and subtle gold accents.
- Languages: English (default), Simplified Chinese (中文), and Amharic (አማርኛ). The language selector remembers the visitor's choice in local storage.
- Five business-card services: Import & Export; Freight & Logistics; Product Sourcing; Supplier Verification; Business Tour.
- Manufacturer promotion is free; buyer inquiries are intended to be coordinated by Guangzhou KM.

## Important status
This is **not yet a production-ready dynamic platform**. The homepage is implemented, but authentication, live product data, real inquiry storage, upload storage, moderation, and admin authorization still need to be connected and tested. The current inquiry form uses a mailto placeholder and is not a secure production form.

## Requirements
- Node.js 20 or newer
- A Supabase project for database, authentication, and file storage
- A hosting account such as Vercel

## Run locally
1. Install Node.js.
2. Extract this folder.
3. Open a terminal in the project folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open `http://localhost:3000`.

## Connect Supabase
1. Create a Supabase project.
2. Copy `.env.example` to `.env.local`.
3. Add your Supabase project URL and public anon key to `.env.local`.
4. Review `supabase/schema.sql` and run it in the Supabase SQL Editor.
5. Implement server-side authentication, inquiry submission, product uploads, and admin moderation before publishing.

Never put a Supabase service-role key in frontend code or share passwords/API secrets in chat.

## Planned next steps
1. Registration and login with manufacturer/buyer roles.
2. Manufacturer profile submission and admin approval.
3. Product management and image uploads.
4. Public search for approved manufacturers and products.
5. Secure inquiry form stored in the database and routed to Guangzhou KM Limited.
6. Admin dashboard and authorization checks.
7. Chinese and Amharic translations.
8. Security, spam protection, and production testing.
