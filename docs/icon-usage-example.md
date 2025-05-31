# Icon Usage Guide

## Using the Standardized Icon System in MDX Files

The new icon system provides consistent, accessible, and responsive icons across
the entire portfolio site. This approach:

- **Reduces bundle size** by leveraging the lightweight Radix UI library
- **Ensures consistency** in icon appearance, sizing, and animations
- **Simplifies maintenance** - changes to icons can be made in one place
- **Improves accessibility** with proper ARIA attributes

### Basic Example

Replace inline SVGs like this:

```jsx
<svg
  xmlns='http://www.w3.org/2000/svg'
  className='ml-2 h-4 w-4'
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
```

With standardized components like this:

```jsx
import { ArrowRight } from '@/components/ui/icon'

;<ArrowRight size='sm' className='ml-2' />
```

### Available Icons

The icon system currently includes:

- `<ArrowLeft />` - Left arrow (← direction)
- `<ArrowRight />` - Right arrow (→ direction)
- `<ExternalLink />` - External link indicator
- `<ChevronRight />` - Right chevron (›)

### Sizing Options

All icons support three standard sizes:

- `size="sm"` - Small (16×16px, h-4 w-4)
- `size="md"` - Medium (20×20px, h-5 w-5, default)
- `size="lg"` - Large (24×24px, h-6 w-6)

### Animation Example

For hover animations like those used in links:

```jsx
<a href='https://example.com' className='group inline-flex items-center'>
  Learn more
  <ArrowRight
    size='sm'
    className='ml-2 transition-transform duration-300 group-hover:translate-x-1'
  />
</a>
```

### External Link Example

For external links with proper indicators:

```jsx
<a
  href='https://example.com'
  target='_blank'
  rel='noopener noreferrer'
  className='inline-flex items-center'
>
  Visit documentation
  <ExternalLink size='sm' className='ml-1' />
</a>
```
