import { cn } from 'mxcn';
import type { MDXComponents } from 'mdx/types'

const FORMAT_H1 = "text-4xl"
const FORMAT_H2 = "text-2xl"
const FORMAT_H3 = "text-xl"
const FORMAT_P = "my-2"
const FORMAT_UL = "list-disc"
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ className, ...props }) => (
      <h1 className={cn(FORMAT_H1, className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <h2 className={cn(FORMAT_H2, className)} {...props} />
    ),
    h3: ({ className, ...props }) => (
      <h3 className={cn(FORMAT_H3, className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <p className={cn(FORMAT_P, className)} {...props} />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn(FORMAT_UL, className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={className} {...props} />
    ),
  }
}