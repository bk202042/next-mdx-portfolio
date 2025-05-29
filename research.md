# Research Log

This document contains research findings, code snippets, commands, and library
versions used during the development process, sourced from Context7 and other
relevant documentation.

## Package Management

**Package Manager**: pnpm

**Benefits**:
- Disk space efficiency through content-addressable storage
- Faster installation than npm and yarn
- Strict dependency resolution preventing phantom dependencies
- Better monorepo support with workspaces

**Project Configuration**:
- Confirmed use of pnpm with presence of `pnpm-lock.yaml` file
- Next.js version: 14.2.5
- TypeScript for type safety
- Tailwind CSS for styling (v3.4.1)

**Next.js Component Model**:
- Server Components: Default in Next.js 14. Cannot use React hooks (useState, useEffect, etc.)
- Client Components: Must add `"use client"` directive at the top of the file
- When using React hooks, always remember to add the `"use client"` directive
- Components that use animations, state, or user interactions should be client components

**Common Commands**:
```bash
# Install dependencies
pnpm install

# Add a dependency
pnpm add [package-name]

# Add a dev dependency
pnpm add -D [package-name]

# Run scripts (e.g., dev server)
pnpm dev

# Build for production
pnpm build

# Check TypeScript types without emitting files
pnpm exec tsc --noEmit

# Format code with Prettier
pnpm exec prettier --write .
```

**Key Dependencies**:
- next-mdx-remote (^5.0.0) for MDX content rendering
- next-themes (^0.3.0) for dark mode support
- react-hook-form (^7.52.2) for form handling
- zod (^3.23.8) for schema validation

## Mobile Header UI Improvement

**Objective**: Improve the mobile UI for the header navigation, specifically
addressing the cramped layout and overlapping elements.

**Approach**: Implement a responsive hamburger menu for mobile screens.

**Key Technologies**: React (useState), Tailwind CSS.

**Planned Changes**:

- Hide horizontal navigation links on small screens.
- Display a hamburger icon to toggle a mobile navigation menu.
- The mobile menu will display navigation links vertically.
- The "BK" logo and theme toggle will remain in the header.

**Icon Sourcing Strategy**:

- Check for existing icon components.
- If a new icon library is needed, use Context7 to find installation
  documentation for `lucide-react`.
