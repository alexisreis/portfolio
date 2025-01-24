import { useState } from 'react';
import { useI18n } from 'next-localization';

import Card from '@/components/Card';
import { PageSEO } from '@/components/SEO';
import { getAllFilesFrontMatter } from '@/lib/mdx';

import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';
import SearchBar from '@/components/SearchBar';

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

export default function Index() {
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

        <SearchBar
          placeholder={i18n.t('projects.search')}
          onChange={(e) => setSearchValue(e.target.value)}
        />

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
