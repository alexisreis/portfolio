import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import PostAuthorCard from '@/components/PostAuthorCard';
import { BlogSEO } from '@/components/SEO';

import siteMetadata from '@/data/siteMetadata';

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, readingTime } = frontMatter;

  return (
    <>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div>
          <header className="pb-10">
            <div className="mt-4 space-y-1 text-left">
              <PageTitle>{title}</PageTitle>
            </div>
            <div className="flex items-center justify-between">
              <PostAuthorCard authorDetails={authorDetails} date={date} readingTime={readingTime} />
            </div>
          </header>
          <div className="pb-8 " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className=" xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-4 dark:prose-dark">{children}</div>
            </div>
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-2 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 text-right xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
