import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import Image from '@/components/Image';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';

import { useI18n } from 'next-localization';

const MAX_DISPLAY = 4;

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
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
              Alexis Reis
            </h1>
            <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-2xl">
              {i18n.t('home.status')}
            </h2>

            <Link
              href="mailto:alexisreis@outlook.fr"
              aria-label="Contact me!"
              className="mt-4 animate-bounce items-center space-x-4 rounded-xl bg-red-500 p-6 text-white shadow-md transition duration-300 hover:bg-red-600 hover:shadow-lg focus:ring-4 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-red-500/20 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400/40 dark:focus:ring-offset-red-400/20"
              title={i18n.t('home.contact_me')}
            >
              {i18n.t('home.looking_for')}
              <strong> {i18n.t('home.looking_for_what')} </strong>
            </Link>
          </div>
          <div className="relative mb-8 mr-auto w-[100px] sm:mb-0 sm:w-[200px]">
            <Image
              src="/static/images/profile.jpg"
              alt="avatar"
              width="200px"
              height="200px"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 text-zinc-500 dark:text-slate-300">
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

        <div className="-m-4 mb-2 flex flex-wrap">
          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-1/2 md:w-1/4">
            <Image
              src="/static/images/profile/rhino.png"
              alt="INSA Lyon"
              width="100px"
              height="100px"
              className="dark:invert"
            />
            <span className="block text-center text-xl font-bold text-red-500">INSA Lyon</span>

            <span className="block text-center text-sm text-gray-600 dark:text-gray-200">
              <strong>{i18n.t('home.tiles.currently.p1')}</strong>
              {i18n.t('home.tiles.currently.p2')} <br /> {i18n.t('home.tiles.currently.p3')}{' '}
              <strong>{i18n.t('home.tiles.currently.p4')}</strong>
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-1/2 md:w-1/4">
            <span className="block text-center text-xl font-bold text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.passionate.title')}
            </span>

            <Image
              src="/static/images/profile/tech.png"
              alt="Tech passion"
              width="100px"
              height="100px"
              className="dark:invert"
            />

            <span className="block text-center text-sm text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.passionate.p1')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-1/2 md:w-1/4">
            <span className="block text-center text-xl font-bold text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.sport.title')}
            </span>

            <Image
              src="/static/images/profile/handball.png"
              alt="Sporty"
              width="100px"
              height="100px"
              className="dark:invert"
            />

            <span className="block text-center text-sm text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.sport.p1')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-1/2 md:w-1/4">
            <Image
              src="/static/images/profile/cinema.png"
              alt="Cinema"
              width="100px"
              height="100px"
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

        {/* LINKS */}

        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-sky-600 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-sky-500 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.linkedin.com/in/alexis-reis-6aa315216/"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="focusable dark:hover:gray-400/80 flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-black py-2 px-2.5 font-medium text-white shadow-lg shadow-indigo-500/10 transition selection:bg-white/30 hover:bg-gray-800/80 hover:shadow-indigo-500/5 focus:ring-indigo-500/40 dark:bg-white dark:text-black dark:shadow-indigo-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-gray-100/80 dark:hover:shadow-gray-400/5 dark:focus:ring-indigo-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://github.com/alexisreis"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-lime-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="mailto:alexisreis@outlook.fr"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>

          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-red-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-md shadow-gray-500/10 transition duration-300 hover:bg-red-600 hover:shadow-lg focus:ring-4 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-red-500/20 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400/40 dark:focus:ring-offset-red-400/20 sm:w-auto sm:px-3 sm:pl-2.5"
            href="/static/"
            download
          >
            <svg
              height="24"
              role="presentation"
              width="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="hidden sm:inline">{i18n.t('home.download_resume')}</span>
          </a>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-2 justify-center"></div>
        </div>
      </div>

      {/* PROJECTS */}

      <div className="content">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Projects</h2>
        <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-slate-300">
          A selection of projects I worked on in the past few years.
        </p>
      </div>
      <div className="container py-8">
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
          href={'/blog/projects'}
          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Link to all projects`}
        >
          {i18n.t('home.see_all_projects')}
        </Link>
      </div>

      <div className="content mt-8 sm:mt-12">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Internships</h2>
        <ul className="mt-8">
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.worldline.com/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-14 w-14 rounded-md bg-gray-100">
                <Image
                  src="/static/images/workxp/worldline.png"
                  alt="Worldline"
                  width="56px"
                  height="56px"
                  className="rounded-md"
                />
              </div>
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Worldline Labs, Lyon
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  {i18n.t('home.experiences.worldline.date1')}
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  {i18n.t('home.experiences.worldline.date2')}
                </span>
              </p>
              <p className="flex items-center">
                <span className="flex-1 text-zinc-500 dark:text-zinc-400">
                  {i18n.t('home.experiences.worldline.description')}
                </span>
              </p>
            </div>
          </li>

          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://liris.cnrs.fr/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-14 w-14 rounded-md bg-gray-100">
                <Image
                  src="/static/images/workxp/liris.png"
                  alt="LIRIS"
                  width="56px"
                  height="56px"
                  className="rounded-md"
                />
              </div>
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  LIRIS, Lyon
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  {i18n.t('home.experiences.liris.date1')}
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  {i18n.t('home.experiences.liris.date2')}
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  {i18n.t('home.experiences.liris.description')}
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* SCHOOLS */}
      <div className="content mt-8 sm:mt-12">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Education</h2>
        <ul className="mt-8">
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.tcd.ie/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-14 w-14 rounded-md bg-gray-100">
                <Image
                  src="/static/images/schools/tcd.png"
                  alt="Trinity College Dublin"
                  width="56px"
                  height="56px"
                  className="rounded-md"
                />
              </div>
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Trinity College Dublin, Ireland 🇮🇪
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2023
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  {i18n.t('home.education.trinity')}
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.insa-lyon.fr/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-14 w-14 rounded-md bg-gray-100">
                <Image
                  src="/static/images/schools/insa.svg"
                  alt="INSA Lyon"
                  width="56px"
                  height="56px"
                  className="rounded-md"
                />
              </div>
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  INSA Lyon, France 🇫🇷
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2019
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  2024
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  {i18n.t('home.education.insa')}
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://lyc-bonaparte-autun.eclat-bfc.fr/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-14 w-14 rounded-md bg-gray-100">
                <Image
                  src="/static/images/schools/lycee_bonaparte.png"
                  alt="Lycée Bonaparte d'Autun"
                  width="56px"
                  height="56px"
                  className="rounded-md"
                />
              </div>
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Lycée Bonaparte d'Autun, France 🇫🇷
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2016
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  2019
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  {i18n.t('home.education.lycee')}
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="content mt-8 sm:mt-12">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Organizations</h2>
        <ul className="mt-8">
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://aedi-insa-lyon.fr/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-14 w-14 rounded-md bg-gray-100">
                <Image
                  src="/static/images/associations/AEDI.png"
                  alt="AEDI INSA Lyon"
                  width="56px"
                  height="56px"
                  className="rounded-md"
                />
              </div>
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  AEDI INSA Lyon
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2021
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  2023
                </span>
              </p>
              <p className="flex items-center">
                <span className="flex-1 text-zinc-500 dark:text-zinc-400">
                  {i18n.t('home.organizations.AEDI')}
                </span>
              </p>
            </div>
          </li>

          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://cinelamouette.fr/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-14 w-14 rounded-md bg-gray-100">
                <Image
                  src="/static/images/associations/mouette.png"
                  alt="Ciné - La Mouette"
                  width="56px"
                  height="56px"
                  className="rounded-md"
                />
              </div>
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Ciné - La Mouette, Lyon
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2021
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  {i18n.t('home.organizations.TODAY')}
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  {i18n.t('home.organizations.CLM')}
                </span>
              </p>
            </div>
          </li>

          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.instagram.com/kls_lyon/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-14 w-14 rounded-md bg-gray-100">
                <Image
                  src="/static/images/associations/kls.png"
                  alt="KLS"
                  width="56px"
                  height="56px"
                  className="rounded-md"
                />
              </div>
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  KLS Lyon
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2022
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  {i18n.t('home.organizations.TODAY')}
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  {i18n.t('home.organizations.KLS')}
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
