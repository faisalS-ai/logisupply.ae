# LogiSupply.ae — Phase 1 foundation

Next.js + TypeScript application scaffold for a multi-tenant UAE freight-forwarding platform. Public routes are in `app/(public)`, workspace routes in `app/(workspace)`, and tenant/auth domain foundations in `lib` and `prisma`.

## Local setup

1. Copy `.env.example` to `.env` and set a local PostgreSQL `DATABASE_URL` plus a strong `AUTH_SECRET`.
2. Install dependencies: `pnpm install`.
3. Run `pnpm db:generate && pnpm db:migrate && pnpm db:seed`.
4. Run `pnpm dev`.

All seed content is fictional. The schema separates marketplace access from application entitlements and includes tenant ownership columns for the Phase 1 entities. Production authentication, email delivery, file storage, malware scanning, OAuth/MFA, and rate limiting require configured external services before launch.
# logisupply.ae
