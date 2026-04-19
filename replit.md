# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- `artifacts/khuta-landing`: static RTL product page for "خطى | للسيولة المالية عبر المجوهرات" served at `/`. The user requested a frontend-only page with no database and no payment gateway. Main deliverable is `artifacts/khuta-landing/index.html`, a single HTML document with embedded CSS and JavaScript. It displays seven product cards in a strict two-column CSS Grid on desktop and mobile, with modal product details and temporary `#` purchase links.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/khuta-landing run dev` — run the Khuta product page locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
