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

## MDX UI Enhancement Standards

**Overview**: This section outlines best practices for enhancing MDX content files with superior UI/UX elements based on our implementation experience. These standards ensure consistency, accessibility, and visual appeal across all MDX content.

### Visual Component Standards

**1. Call-to-Action (CTA) Components**

*Standard Implementation*:
```jsx
<div className="mb-12 mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md border border-blue-200 transform transition-all duration-500 hover:shadow-lg hover:border-blue-300">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <div className="md:flex-1">
      <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3">[Title Text]</h3>
      <p className="text-blue-700 mb-4 text-base md:text-lg">[Description Text]</p>
    </div>
    <div className="md:flex-shrink-0">
      <a
        href="[URL]"
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-bold text-lg text-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <span className="flex items-center justify-center">
          [Button Text]
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </a>
    </div>
  </div>
</div>
```

*Minimalist CTA Alternative*:
```jsx
<a
  href="[URL]"
  target="_blank"
  rel="noopener noreferrer"
  className="my-8 block w-full max-w-md mx-auto px-8 py-6 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-xl font-bold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  <span className="flex items-center justify-center">
    [Button Text]
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
</a>
```

**2. Information Alert Boxes**

*Standard Implementation*:
```jsx
<div className="my-8 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm border border-blue-100">
  <div className="flex items-start">
    <div>
      <h3 className="text-lg font-medium text-blue-800">[Alert Title]</h3>
      <div className="mt-2 text-blue-700">
        <p className="mb-3">[Alert Description]</p>
      </div>
    </div>
  </div>
</div>
```

**3. Typography Standards**

- Headings: Use semantic hierarchy (h1-h6) with consistent styling
  - h1: `text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900`
  - h2: `text-2xl sm:text-3xl font-bold text-gray-800 mt-12 mb-6`
  - h3: `text-xl font-bold text-gray-800 mt-8 mb-4`

- Paragraphs: `text-base sm:text-lg text-gray-700 leading-7 mb-6`

- Lists: 
  - Unordered: `list-disc pl-5 mb-6 text-gray-700 space-y-2`
  - Ordered: `list-decimal pl-5 mb-6 text-gray-700 space-y-2`

**4. Code Blocks**

```jsx
<pre className="my-6 rounded-lg bg-gray-900 p-4 overflow-x-auto">
  <code className="text-sm text-gray-100">[Code content]</code>
</pre>
```

### Animation & Interaction Standards

**1. Element Entrance Animations**

When using animations, implement them using intersection observer pattern for better performance:

```jsx
// In a Client Component file with "use client" directive
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${inView 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
};
```

**2. Hover/Focus Interaction Standards**

- Buttons/Links: `transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`
- Cards: `transition-all duration-300 hover:shadow-lg hover:border-blue-300`
- Icons: `transition-transform duration-300 group-hover:translate-x-1` (for directional icons)

### Responsive Design Standards

**Key Breakpoints**:
- Mobile: Default styles
- Small tablets: `sm:` (640px+)
- Tablets: `md:` (768px+)
- Desktops: `lg:` (1024px+)
- Large screens: `xl:` (1280px+)

**Layout Pattern**:
- Mobile: Single column, stacked elements
- Tablet+: Multi-column where appropriate, horizontal navigation
- Use `flex-col md:flex-row` for elements that should switch from vertical to horizontal

**Font Size Scaling**:
- Base text: `text-base md:text-lg`
- Headings: Increase by 1 size at each breakpoint (e.g., `text-xl md:text-2xl lg:text-3xl`)

### Accessibility Standards

- Always include `rel="noopener noreferrer"` with `target="_blank"` links
- Use `focus:outline-none focus:ring-2` pattern for keyboard navigation
- Maintain color contrast ratios (WCAG AA standard minimum)
- Use semantic HTML elements (headings, lists, etc.)
- Include ARIA attributes where appropriate

### Implementation Best Practices

1. **Component Extraction**: For repeating UI patterns, extract to reusable components in `/components/` directory
2. **MDX Content Structure**: 
   - Keep content semantically organized with proper heading hierarchy
   - Separate sections with appropriate spacing (my-8, my-12)
   - Use consistent components for similar content types
3. **Consistency**: Maintain visual language consistency across all MDX files
4. **Performance**: Use responsive images and lazy-loading for media
5. **Testing**: Verify MDX content renders properly at all breakpoints

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
