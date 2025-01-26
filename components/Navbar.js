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
    <header className="bg-background-color dark:bg-background-color-dark transition duration-300 ease-in-out sticky top-0 z-10 px-4 md:px-0">
      <div className="flex items-center justify-between my-4 py-4 mx-auto max-w-2xl xl:max-w-2xl">
        <Link href="/">
          <Logo className="h-8 w-20 sm:h-10 sm:w-24 dark:fill-white" />
        </Link>
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
          <div className="flex flex-row items-center ml-2 gap-4 sm:gap-2">
            <LanguageSwitcher />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
