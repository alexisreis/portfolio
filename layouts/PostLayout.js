import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import PostAuthorCard from '@/components/PostAuthorCard';
import { BlogSEO } from '@/components/SEO';

import siteMetadata from '@/data/siteMetadata';
import Image from '@/components/Image';

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, readingTime } = frontMatter;

  return (
    <>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div>
          <header className="pb-6">
            <div className="relative mb-4">
              <Image
                src={frontMatter.images[0]}
                width={1440}
                height={720}
                alt="Cover image"
                className="w-full h-64 object-cover backdrop-filter backdrop-blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
              <PageTitle className="absolute bottom-0 left-0 right-0">{title}</PageTitle>
            </div>
            <PostAuthorCard authorDetails={authorDetails} date={date} readingTime={readingTime} />
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
