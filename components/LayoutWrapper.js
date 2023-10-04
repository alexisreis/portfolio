import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/logo.svg';
import Link from './Link';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import NextLink from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import { useI18n } from 'next-localization';

const LayoutWrapper = ({ children }) => {
  const i18n = useI18n();

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
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
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {i18n.t(`nav_links.${link.title}`)}
                </Link>
              ))}
            </div>
            <div className="flex flex-row items-center">
              <LanguageSwitcher />
              <ThemeSwitch />
            </div>

            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
