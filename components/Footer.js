import { useI18n } from 'next-localization';
import Link from './Link';
import SocialIconsList from '@/components/list/SocialIconsList';
import siteMetadata from '@/data/siteMetadata';

export default function Footer() {
  const i18n = useI18n();

  return (
    <footer className="mt-8 flex flex-col items-center">
      <SocialIconsList iconSize="w-5 h-5" />
      <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <div>{siteMetadata.author}</div>
      </div>
      <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <Link
          className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
          href="/"
        >
          {i18n.t('nav_links.home')}
        </Link>
        <Link
          className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
          href="/projects"
        >
          {i18n.t('nav_links.projects')}
        </Link>
        <Link
          className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
          href="/about"
        >
          {i18n.t('nav_links.about')}
        </Link>
      </div>
    </footer>
  );
}
