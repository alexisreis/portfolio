import { useRouter } from 'next/router';
import { useState } from 'react';
import NextLink from 'next/link';

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = router.locale; // Current locale

  const flags = {
    en: '🇬🇧',
    fr: '🇫🇷',
  };

  const languages = {
    en: 'English',
    fr: 'Français',
  };

  const locales = router.locales.filter((locale) => locale !== currentLocale);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center rounded-md p-1 text-xl text-white hover:bg-gray-200"
      >
        {flags[currentLocale]}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-10">
          <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {locales.map((locale) => (
              <NextLink key={locale} href={router.asPath} locale={locale} onClick={closeMenu}>
                <a className="flex flex-1 rounded-md px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  {flags[locale] + ' ' + languages[locale]}
                </a>
              </NextLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
