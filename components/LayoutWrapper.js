import headerNavLinks from '@/data/headerNavLinks';
import Logo from '/public/static/images/logo.svg';
import Link from './Link';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';

const LayoutWrapper = ({ children }) => {
  const i18n = useI18n();
  const router = useRouter();

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-8">
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
                  className={`p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 ${router.pathname === link.href ? 'text-red-500 dark:text-red-400 border-b-4 border-red-500' : ''} dot`}
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
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
