import React from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  ChevronRightIcon
} from '@radix-ui/react-icons'

// Extended props with size control and className for styling
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg'
}

// Size mappings for consistent icon sizing
const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6'
}

// Base icon wrapper to maintain consistent styling and sizing
const IconWrapper = ({
  children,
  size = 'md',
  className = '',
  ...props
}: IconProps & { children: React.ReactNode }) => {
  return (
    <span
      className={`inline-flex ${sizeClasses[size]} ${className}`}
      aria-hidden='true'
      {...props}
    >
      {children}
    </span>
  )
}

// Exported icon components with consistent styling
export const ArrowLeft = ({
  size = 'md',
  className = '',
  ...props
}: IconProps) => (
  <IconWrapper size={size} className={`${className}`} {...props}>
    <ArrowLeftIcon className='h-full w-full' />
  </IconWrapper>
)

export const ArrowRight = ({
  size = 'md',
  className = '',
  ...props
}: IconProps) => (
  <IconWrapper size={size} className={`${className}`} {...props}>
    <ArrowRightIcon className='h-full w-full' />
  </IconWrapper>
)

export const ExternalLink = ({
  size = 'md',
  className = '',
  ...props
}: IconProps) => (
  <IconWrapper size={size} className={`${className}`} {...props}>
    <ExternalLinkIcon className='h-full w-full' />
  </IconWrapper>
)

export const ChevronRight = ({
  size = 'md',
  className = '',
  ...props
}: IconProps) => (
  <IconWrapper size={size} className={`${className}`} {...props}>
    <ChevronRightIcon className='h-full w-full' />
  </IconWrapper>
)
