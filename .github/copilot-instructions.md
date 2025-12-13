# Copilot Instructions for cequireste-landing-page

## Project Overview

This is a Next.js 14 landing page for the CeQuiReste tool, which reveals the true economic reality of subscription prices for solopreneurs and SaaS founders. It follows a component-based architecture with data-driven content.

## Architecture

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom color variables in `globals.css`
- **Fonts**: Manrope for headings, Source Sans 3 for body text
- **Components**: Modular React components in `src/components/`
- **Data**: Static content in `src/data/` files, typed with interfaces in `types.ts`
- **Images**: Stored in `public/images/`

## Key Patterns

- **Data-Driven Components**: Each section imports data from `@/data/` (e.g., `heroDetails` from `hero.ts`)
- **Conditional Styling**: Use `clsx` for dynamic Tailwind classes (e.g., `clsx("base-classes", { "conditional-class": condition })`)
- **Animations**: Framer Motion for smooth transitions, especially in Benefits section
- **Icons**: React Icons for social and UI icons, with utility function `getPlatformIconByName` in `utils.tsx`
- **Layout Structure**: Page composed in `app/page.tsx` with Container/Section wrappers

## Developer Workflows

- **Development**: `npm run dev` starts dev server on localhost:3000
- **Build**: `npm run build` for production build
- **Linting**: `npm run lint` with ESLint
- **Deployment**: Optimized for Vercel with analytics integration

## Conventions

- **Color Scheme**: Primary yellow (#FED835), secondary blue (#304fff), defined as CSS variables
- **Component Props**: Use TypeScript interfaces from `types.ts` for all data structures
- **File Organization**: Components in subfolders (e.g., `Pricing/Pricing.tsx`), data files flat in `data/`
- **Imports**: Absolute paths with `@/` alias for src directory
- **Responsive Design**: Mobile-first with Tailwind breakpoints (sm:, md:, lg:)

## Examples

- Adding a new section: Create component in `components/`, add data in `data/`, import in `page.tsx`
- Updating content: Modify data files like `hero.ts` or `pricing.ts` - components auto-update
- Styling: Use custom colors via `text-primary` or `bg-secondary` classes
