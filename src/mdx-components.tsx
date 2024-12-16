import { Code, Heading1, Heading2, Heading3, Heading4, OrderedList, Paragraph, UnorderedList } from './components/ui/typography';

import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    p: Paragraph,
    code: Code,
    ul: UnorderedList,
    ol: OrderedList,
    ...components,
  };
}
