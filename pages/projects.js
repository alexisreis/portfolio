import { useState } from 'react';
import { useI18n } from 'next-localization';

import Card from '@/components/Card';
import { PageSEO } from '@/components/SEO';
import { getAllFilesFrontMatter } from '@/lib/mdx';

import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';

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
    const searchContent = frontMatter.title + frontMatter.description + frontMatter.tags.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const displayPosts = projectsData.length > 0 && !searchValue ? projectsData : filteredBlogPosts;

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

        <div className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-600 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            aria-label={i18n.t('projects.search')}
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={i18n.t('projects.search')}
            className="block w-full py-2 pl-12 pr-3 focus:border-primary-500 text-gray-600 focus:ring-primary-500 rounded-md sm:text-sm border-gray-300 dark:border-gray-900 dark:bg-gray-800 dark:text-white focus:outline-none"
          />
        </div>

        <div className="container py-4">
          <div className="flex flex-wrap flex-col md:flex-row gap-4 md:justify-between">
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
