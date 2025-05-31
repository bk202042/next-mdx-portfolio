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

- Server Components: Default in Next.js 14. Cannot use React hooks (useState,
  useEffect, etc.)
- Client Components: Must add `"use client"` directive at the top of the file
- When using React hooks, always remember to add the `"use client"` directive
- Components that use animations, state, or user interactions should be client
  components

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

**Overview**: This section outlines best practices for enhancing MDX content
files with superior UI/UX elements based on our implementation experience. These
standards ensure consistency, accessibility, and visual appeal across all MDX
content.

### Visual Component Standards

**1. Call-to-Action (CTA) Components**

_Standard Implementation_:

```jsx
<div className='mb-12 mt-8 transform rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-md transition-all duration-500 hover:border-blue-300 hover:shadow-lg'>
  <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
    <div className='md:flex-1'>
      <h3 className='mb-3 text-xl font-bold text-blue-800 md:text-2xl'>
        [Title Text]
      </h3>
      <p className='mb-4 text-base text-blue-700 md:text-lg'>
        [Description Text]
      </p>
    </div>
    <div className='md:flex-shrink-0'>
      <a
        href='[URL]'
        target='_blank'
        rel='noopener noreferrer'
        className='group block w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-center text-lg font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:w-auto'
      >
        <span className='flex items-center justify-center'>
          [Button Text]
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </span>
      </a>
    </div>
  </div>
</div>
```

_Minimalist CTA Alternative_:

```jsx
<a
  href='[URL]'
  target='_blank'
  rel='noopener noreferrer'
  className='mx-auto my-8 block w-full max-w-md transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-center text-xl font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
>
  <span className='flex items-center justify-center'>
    [Button Text]
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='ml-2 h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M14 5l7 7m0 0l-7 7m7-7H3'
      />
    </svg>
  </span>
</a>
```

**2. Information Alert Boxes**

_Standard Implementation_:

```jsx
<div className='my-8 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm'>
  <div className='flex items-start'>
    <div>
      <h3 className='text-lg font-medium text-blue-800'>[Alert Title]</h3>
      <div className='mt-2 text-blue-700'>
        <p className='mb-3'>[Alert Description]</p>
      </div>
    </div>
  </div>
</div>
```

**3. Typography Standards**

- Headings: Use semantic hierarchy (h1-h6) with consistent styling

  - h1:
    `text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900`
  - h2: `text-2xl sm:text-3xl font-bold text-gray-800 mt-12 mb-6`
  - h3: `text-xl font-bold text-gray-800 mt-8 mb-4`

- Paragraphs: `text-base sm:text-lg text-gray-700 leading-7 mb-6`

- Lists:
  - Unordered: `list-disc pl-5 mb-6 text-gray-700 space-y-2`
  - Ordered: `list-decimal pl-5 mb-6 text-gray-700 space-y-2`

**4. Code Blocks**

```jsx
<pre className='my-6 overflow-x-auto rounded-lg bg-gray-900 p-4'>
  <code className='text-sm text-gray-100'>[Code content]</code>
</pre>
```

### Animation & Interaction Standards

**1. Element Entrance Animations**

When using animations, implement them using intersection observer pattern for
better performance:

```jsx
// In a Client Component file with "use client" directive
import { useInView } from 'react-intersection-observer'

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}
```

**2. Hover/Focus Interaction Standards**

- Buttons/Links:
  `transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`
- Cards: `transition-all duration-300 hover:shadow-lg hover:border-blue-300`
- Icons: `transition-transform duration-300 group-hover:translate-x-1` (for
  directional icons)

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
- Use `flex-col md:flex-row` for elements that should switch from vertical to
  horizontal

**Font Size Scaling**:

- Base text: `text-base md:text-lg`
- Headings: Increase by 1 size at each breakpoint (e.g.,
  `text-xl md:text-2xl lg:text-3xl`)

### Accessibility Standards

- Always include `rel="noopener noreferrer"` with `target="_blank"` links
- Use `focus:outline-none focus:ring-2` pattern for keyboard navigation
- Maintain color contrast ratios (WCAG AA standard minimum)
- Use semantic HTML elements (headings, lists, etc.)
- Include ARIA attributes where appropriate

### Implementation Best Practices

1. **Component Extraction**: For repeating UI patterns, extract to reusable
   components in `/components/` directory
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
