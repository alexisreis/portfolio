import { useI18n } from 'next-localization';

import Image from '@/components/Image';
import Card from '@/components/Card';
import Link from '@/components/Link';
import SocialIconsList from '@/components/social-icons/SocialIconsList';
import WorkXpList from '@/components/list/WorkXpList';
import EducationList from '@/components/list/EducationList';
import OrganizationsList from '@/components/list/OrganizationsList';
import { PageSEO } from '@/components/SEO';
import { getAllFilesFrontMatter } from '@/lib/mdx';

import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';

const MAX_DISPLAY = 2;

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesFrontMatter('blog');
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

  return { props: { posts, lngDict } };
}

export default function Home({ posts }) {
  const i18n = useI18n();

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 md:space-y-5">
        <div className="mr-auto flex flex-row items-center">
          <div className="w-[100px] sm:mb-0 sm:w-[180px]">
            <Image
              src="/static/images/profile.jpg"
              alt="avatar"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-1 flex-col pl-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
              Alexis Reis
            </h1>
            <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-xl">
              {i18n.t('home.status')}
            </h2>
            <Link
              href="mailto:alexisreis@outlook.fr"
              aria-label="Contact me!"
              className="mt-4 hidden animate-bounce items-center space-x-4 rounded-xl bg-red-500 p-6 text-white shadow-md transition duration-300 hover:bg-red-600 hover:shadow-lg focus:ring-4 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-red-500/20 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400/40 dark:focus:ring-offset-red-400/20 sm:block"
              title={i18n.t('home.contact_me')}
            >
              {i18n.t('home.looking_for')}
              <strong> {i18n.t('home.looking_for_what')} </strong>
            </Link>
          </div>
        </div>
        <Link
          href="mailto:alexisreis@outlook.fr"
          aria-label="Contact me!"
          className="mt-8 block animate-bounce items-center space-x-4 rounded-xl bg-red-500 p-6 text-white shadow-md transition duration-300 hover:bg-red-600 hover:shadow-lg focus:ring-4 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-red-500/20 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400/40 dark:focus:ring-offset-red-400/20 sm:hidden"
          title={i18n.t('home.contact_me')}
        >
          {i18n.t('home.looking_for')}
          <strong> {i18n.t('home.looking_for_what')} </strong>
        </Link>
        <SocialIconsList />
      </div>

      <div className="mt-4 space-y-4 text-zinc-500 dark:text-slate-300">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
          {i18n.t('home.presentation.hi')}
        </h2>
        <p className="my-4 leading-loose">
          {i18n.t('home.presentation.p1')}{' '}
          <a
            className="focusable rounded-sm font-medium text-zinc-800 underline decoration-red-500 decoration-2 underline-offset-2 transition duration-100 hover:text-red-500 focus:text-red-800 focus:ring-sky-500/40 dark:text-white dark:decoration-red-400 dark:hover:text-red-400 dark:focus:text-red-500 dark:focus:ring-sky-400/40"
            href="https://insa-lyon.fr/"
            rel="noreferrer"
            target="_blank"
          >
            INSA Lyon 🦏
          </a>
          , <strong>{i18n.t('home.presentation.p2')}</strong>
        </p>
        <div className="-m-4 mb-2 flex flex-row flex-wrap justify-center">
          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-3/4 md:w-1/4">
            <Image
              src="/static/images/profile/rhino.png"
              alt="INSA Lyon"
              width={100}
              height={100}
              className="dark:invert"
            />
            <span className="block text-center text-xl font-bold text-red-500">INSA Lyon</span>

            <span className="block text-center text-sm text-gray-600 dark:text-gray-200">
              <strong>{i18n.t('home.tiles.currently.p1')}</strong>
              {i18n.t('home.tiles.currently.p2')} <br /> {i18n.t('home.tiles.currently.p3')}{' '}
              <strong>{i18n.t('home.tiles.currently.p4')}</strong>
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-3/4 md:w-1/4">
            <span className="block text-center text-xl font-bold text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.passionate.title')}
            </span>

            <Image
              src="/static/images/profile/tech.png"
              alt="Tech passion"
              width={100}
              height={100}
              className="dark:invert"
            />

            <span className="block text-center text-sm text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.passionate.p1')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-3/4 md:w-1/4">
            <span className="block text-center text-xl font-bold text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.sport.title')}
            </span>

            <Image
              src="/static/images/profile/handball.png"
              alt="Sporty"
              width={100}
              height={100}
              className="dark:invert"
            />

            <span className="block text-center text-sm text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.sport.p1')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-3/4 md:w-1/4">
            <Image
              src="/static/images/profile/cinema.png"
              alt="Cinema"
              width={100}
              height={100}
              className="dark:invert"
            />
            <span className="block text-center text-xl font-bold text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.cinema.title')}
            </span>

            <span className="block whitespace-normal text-center text-sm text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.cinema.p1')} <br /> {i18n.t('home.tiles.cinema.p2')}
            </span>
          </div>
        </div>

        <p className="my-4 leading-loose">{i18n.t('home.me.description1')}</p>
        <p>
          {i18n.t('home.me.description2')}
          <strong>{i18n.t('home.me.lessons')}</strong> {i18n.t('home.me.description3')}
        </p>
        <p>
          {i18n.t('home.me.description4')}{' '}
          <strong>
            {i18n.t('home.me.description5')}{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 focus:text-blue-800 focus:ring-sky-500/40 dark:text-white dark:decoration-blue-400 dark:hover:text-blue-400 dark:focus:text-blue-500 dark:focus:ring-sky-400/40"
              href="https://aedi-insa-lyon.fr/"
              rel="noreferrer"
              target="_blank"
            >
              {i18n.t('home.me.aedi')} 🟦
            </a>
          </strong>{' '}
          {i18n.t('home.me.description6')}
        </p>
        <p>
          {i18n.t('home.me.description7')}
          <strong>{i18n.t('home.me.cinemaClass')}</strong> {i18n.t('home.me.description8')}{' '}
          <strong>
            {i18n.t('home.me.description9')}{' '}
            <a
              className="focusable decoration-black-500 dark:decoration-white-400 rounded-sm font-medium text-zinc-800 underline decoration-2 underline-offset-2 transition duration-100 hover:text-gray-500 focus:text-gray-800 focus:ring-sky-500/40 dark:text-white dark:hover:text-gray-300 dark:focus:text-gray-500 dark:focus:ring-sky-400/40"
              href="https://cinelamouette.fr/"
              rel="noreferrer"
              target="_blank"
            >
              🎬 {i18n.t('home.me.cineLaMouette')}
            </a>
            {i18n.t('home.me.description10')}
          </strong>
          {i18n.t('home.me.description11')}
        </p>
      </div>

      {/* PROJECTS */}
      <div className="content mt-4">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
          {i18n.t('projects.title')}
        </h2>
        <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-slate-300">
          {i18n.t('projects.subtitle')}
        </p>

        <div className="container pt-8">
          <div className="-m-4 mb-2 flex flex-wrap">
            {projectsData.slice(0, MAX_DISPLAY).map((d) => (
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
          <Link
            href={'/projects'}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to all projects`}
          >
            {i18n.t('home.see_all_projects')}
          </Link>
        </div>
      </div>
      <WorkXpList />
      <EducationList />
      <OrganizationsList />
    </>
  );
}
