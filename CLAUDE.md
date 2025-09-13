# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website using MDX for content management. It features blog posts and projects with modern UI/UX including dark mode theming, contact forms, and newsletter subscriptions.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code quality checks

### Content Development
- Add blog posts: Create `.mdx` files in `content/posts/`
- Add projects: Create `.mdx` files in `content/projects/`
- MDX files require frontmatter with metadata (title, summary, publishedAt, etc.)

## Architecture

### Core Structure
- **App Router**: Uses Next.js 14 App Router with file-based routing
- **Content System**: MDX files parsed with `gray-matter` for frontmatter + `next-mdx-remote` for rendering
- **Email Integration**: Resend API for contact forms and newsletter subscriptions
- **Styling**: Tailwind CSS with CSS variables, dark mode via `next-themes`
- **Forms**: `react-hook-form` with `zod` validation schemas

### Key Directories
- `app/` - Next.js App Router pages and API routes
- `components/` - React components (UI primitives in `ui/` subdirectory)
- `content/posts/` - Blog post MDX files
- `content/projects/` - Project showcase MDX files  
- `lib/` - Utilities, schemas, server actions, and content parsers
- `emails/` - Email templates for Resend API

### Content Flow
1. MDX files contain frontmatter (title, summary, publishedAt, etc.) + content
2. `lib/posts.ts` and `lib/projects.ts` parse files using `gray-matter`
3. Components render parsed content using `next-mdx-remote`
4. Custom MDX components available in `components/mdx-content.tsx`

### API Integration
- Contact form: Uses server action `sendEmail()` in `lib/actions.ts`
- Newsletter: Uses server action `subscribe()` in `lib/actions.ts`
- Both require `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` environment variables

### Forms & Validation
- Form schemas defined in `lib/schemas.ts` using Zod
- Contact form: name, email, message validation
- Newsletter: email validation
- Error handling with toast notifications via `sonner`

## UI/UX Guidelines

The project follows specific UI/UX principles outlined in `docs/ui-instruction.md`:

### Key Principles
- **Visual Hierarchy**: Use font size/weight strategically for importance
- **Information Cards**: Primary info (titles, prices) most prominent, secondary info subtle
- **Data Display**: Emphasize values over labels in metric cards
- **Shadows**: Use soft, contextual shadows that blend with background colors
- **Product Showcases**: Dynamic presentation with mock-ups and social proof

### Component Usage
- Leverage existing UI primitives in `components/ui/`
- Create composite components by orchestrating existing primitives
- Ask before creating custom solutions for missing components

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Flexible layouts using Flexbox/Grid
- Consistent spacing with padding/margin system

## Development Notes

### Content Management
- Posts sorted by `publishedAt` date in descending order
- Slug derived from filename (without `.mdx` extension)
- Metadata extracted from frontmatter, content from MDX body
- Custom MDX components like `<Counter />` available

### Styling System
- CSS variables for theming in `app/globals.css`
- Tailwind config extends with custom colors, fonts, animations
- Dark mode support via class-based toggle
- Typography plugin for MDX content styling

### Type Safety
- TypeScript throughout with strict configuration
- Zod schemas for runtime validation
- Defined types for `Post`, `PostMetadata`, `Project`, etc.

## Environment Variables Required

```
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_resend_audience_id
```

## Testing Strategy

Run linting before commits: `npm run lint`
Build verification: `npm run build` to catch TypeScript/build errors
Manual testing of forms and email functionality in development