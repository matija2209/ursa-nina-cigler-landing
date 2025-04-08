import React from 'react'
import { cn } from '@/lib/utils'

interface ContainedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  id?: string
  sectionClassName?: string
  containerClassName?: string
  bgColor?: string
  showGridLines?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'none'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  verticalPadding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

function ContainedSection({
  children,
  className,
  id,
  sectionClassName = '',
  containerClassName = '',
  bgColor = 'bg-primary',
  showGridLines = false,
  maxWidth = '6xl',
  padding = 'lg',
  verticalPadding = 'xl',
  ...props
}: ContainedSectionProps) {
  // Map padding options to Tailwind classes
  const paddingMap = {
    none: '',
    sm: 'px-3 sm:px-4',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-4 sm:px-6 lg:px-12',
    xl: 'px-6 sm:px-8 lg:px-16'
  }

  // Map vertical padding options to Tailwind classes
  const verticalPaddingMap = {
    none: '',
    sm: 'py-6',
    md: 'py-10',
    lg: 'py-16',
    xl: 'py-20 md:py-24',
    '2xl': 'py-24 md:py-32'
  }
  
  // Map maxWidth options to Tailwind classes
  const maxWidthMap = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
    none: ''
  }
  
  // Get the padding class safely
  const paddingClass = paddingMap[padding] || paddingMap['lg'];
  
  // Get the vertical padding class safely
  const verticalPaddingClass = verticalPaddingMap[verticalPadding] || verticalPaddingMap['xl'];
  
  // Get the max width class safely
  const maxWidthClass = maxWidthMap[maxWidth] || maxWidthMap['6xl'];
  
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden',
        bgColor,
        verticalPaddingClass,
        sectionClassName
      )}
    >
      <div
        className={cn(
          "w-full mx-auto", // Center content
          paddingClass,
          maxWidthClass,
          containerClassName,
          className
        )}
        {...props}
      >
        {children}
      </div>
    </section>
  )
}

export { ContainedSection }