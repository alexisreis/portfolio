import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from '@/components/Link';
import MobileNav from '@/components/MobileNav';
import ThemeSwitch from '@/components/ThemeSwitch';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from '../public/static/images/logo.svg';

const Navbar = () => {
  const i18n = useI18n();
  const router = useRouter();

  const isLinkActive = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }

    return router.pathname.startsWith(href);
  };

  return (
    <header className="flex items-center justify-between my-4 p-4 bg-background-color dark:bg-background-color-dark transition duration-300 ease-in-out sticky top-0 z-10 mx-auto max-w-2xl xl:max-w-2xl">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo className="h-10 w-24 dark:fill-white" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 ${isLinkActive(link.href) ? 'text-primary-500 border-b-4 border-primary-500' : ''}`}
            >
              {i18n.t(`nav_links.${link.title}`)}
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center ml-2 gap-2">
          <LanguageSwitcher />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
