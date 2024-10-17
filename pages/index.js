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
import CurrentlyWorkingAt from '@/components/CurrentlyWorkingAt';

import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';
import CertificationsList from '@/components/list/CertificationsList';

const MAX_DISPLAY = 2;

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesFrontMatter('blog');
  const { default: lngDict = {} } = await import(`../locales/${locale}`);

  return { props: { posts, lngDict } };
}

export default function Home() {
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
              className="rounded-full shadow-xl shadow-gray-500 dark:shadow-gray-600 border-4 border-gray-500"
            />
          </div>

          <div className="flex flex-1 flex-col pl-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
              Alexis Reis
            </h1>
            <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-xl">
              {i18n.t('home.status')}
            </h2>
            <CurrentlyWorkingAt isMobileOnly={false} />
            {/*            <Link
              href="mailto:alexisreis@outlook.fr"
              aria-label="Contact me!"
              className="mt-4 hidden animate-bounce items-center space-x-4 rounded-xl bg-red-500 p-6 text-white shadow-md transition duration-300 hover:bg-red-600 hover:shadow-lg focus:ring-4 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-red-500/20 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400/40 dark:focus:ring-offset-red-400/20 sm:block"
              title={i18n.t('home.contact_me')}
            >
              {i18n.t('home.looking_for')}
              <strong> {i18n.t('home.looking_for_what')} </strong>
            </Link>*/}
          </div>
        </div>
        <CurrentlyWorkingAt isMobileOnly={true} />
        {/*       <Link
          href="mailto:alexisreis@outlook.fr"
          aria-label="Contact me!"
          className="mt-8 block animate-bounce items-center space-x-4 rounded-xl bg-red-500 p-6 text-white shadow-md transition duration-300 hover:bg-red-600 hover:shadow-lg focus:ring-4 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-red-500/20 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400/40 dark:focus:ring-offset-red-400/20 sm:hidden"
          title={i18n.t('home.contact_me')}
        >
          {i18n.t('home.looking_for')}
          <strong> {i18n.t('home.looking_for_what')} </strong>
        </Link>*/}

        <SocialIconsList />
      </div>

      <div className="my-4 space-y-4 text-zinc-500 dark:text-slate-300">
        <div className="-p-4 flex flex-row flex-wrap justify-center">
          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-3/4 md:w-1/4">
            <span className="block text-center text-xl font-bold text-red-500">INSA Lyon</span>
            <Image
              src="/static/images/profile/rhino.png"
              alt="INSA Lyon"
              width={80}
              height={80}
              className="dark:invert my-2"
            />
            <span className="block text-center text-sm text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.insa.p1')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-3/4 md:w-1/4">
            <span className="block text-center text-xl font-bold text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.passionate.title')}
            </span>
            <Image
              src="/static/images/profile/tech.png"
              alt="Tech passion"
              width={80}
              height={80}
              className="dark:invert my-2"
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
              width={80}
              height={80}
              className="dark:invert my-2"
            />
            <span className="block text-center text-sm text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.sport.p1')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-3/4 md:w-1/4">
            <span className="block text-center text-xl font-bold text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.cinema.title')}
            </span>
            <Image
              src="/static/images/profile/cinema.png"
              alt="Cinema"
              width={80}
              height={80}
              className="dark:invert my-2"
            />
            <span className="block whitespace-normal text-center text-sm text-gray-600 dark:text-gray-200">
              {i18n.t('home.tiles.cinema.p1')}
            </span>
          </div>
        </div>
      </div>

      <hr className="dark:border-gray-600" />

      {/* PROJECTS */}
      <div className="content mt-8 sm:mt-8">
        <div className="flex flex-row justify-between items-center mb-4">
          <div>
            <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
              {i18n.t('projects.title')}
            </h2>
            <p className="leading-relaxed text-zinc-500 dark:text-slate-300">
              {i18n.t('projects.subtitle')}
            </p>
          </div>
          <Link
            className="flex ml-auto my-auto border border-blue-600 px-4 py-2 rounded-xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-blue-700 dark:hover:border-primary-400 text-center"
            href={'/projects'}
            aria-label={`Link to all projects`}
          >
            {i18n.t('home.see_all_projects')}
          </Link>{' '}
        </div>

        <div className="container mb-4">
          <div className="-m-4 flex flex-wrap">
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
        </div>
      </div>
      <WorkXpList />
      <hr className="dark:border-gray-600" />
      <CertificationsList />
      <hr className="dark:border-gray-600" />
      <EducationList />
      <hr className="dark:border-gray-600" />
      <OrganizationsList />
    </>
  );
}
