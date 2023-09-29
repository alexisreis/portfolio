import { useState } from 'react';

import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import { PageSEO } from '@/components/SEO';
import { getAllFilesFrontMatter } from '@/lib/mdx';

import { useI18n } from 'next-localization';


export const POSTS_PER_PAGE = 6;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return { props: { initialDisplayPosts, posts, pagination } };
}

export default function Projects() {

  const i18n = useI18n();

  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = projectsData.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.description +
     frontMatter.tags.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    projectsData.length > 0 && !searchValue ? projectsData : filteredBlogPosts;

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="">
        <div className="space-y-2 pt-6 pb-4 md:space-y-5">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
            {i18n.t('projects.title')}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {i18n.t('projects.subtitle')}
          </p>
        </div>

        <div className="w-100">
          <input
            aria-label={i18n.t('projects.search')}
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={i18n.t('projects.search')}
            className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {!filteredBlogPosts.length && i18n.t('projects.noResults')}
            {displayPosts.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                date={d.date}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
