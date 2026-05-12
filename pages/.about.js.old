import { MDXLayoutRenderer } from '@/components/MDXComponents';
import { getFileBySlug } from '@/lib/mdx';
import { useRouter } from 'next/router';

const DEFAULT_LAYOUT = 'AuthorLayout';

export async function getStaticProps({ locale }) {
  if (locale === 'fr') {
    const authorDetails = await getFileBySlug('authors', ['fr']);
    return { props: { authorDetails } };
  }
  const authorDetails = await getFileBySlug('authors', ['default']);
  return { props: { authorDetails } };
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails;

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  );
}
