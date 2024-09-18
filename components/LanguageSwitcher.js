import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from '@/components/Image';

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const currentLocale = router.locale;

  const flags = {
    en: '/static/images/flags/en.svg',
    fr: '/static/images/flags/fr.svg',
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

  // Effect to close the dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex flex-row w-8 h-8 items-center justify-center rounded-md p-1 text-xl hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-900"
      >
        <Image
          className="rounded-xl border-2 border-gray-300 dark:border-gray-600"
          src={flags[currentLocale]}
          alt={languages[currentLocale]}
          width={24}
          height={24}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-10 border dark:bg-gray-800 dark:border-gray-500">
          <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {locales.map((locale) => (
              <Link
                key={locale}
                className="flex flex-1 rounded-md px-2 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-100"
                href={router.asPath}
                locale={locale}
                onClick={closeMenu}
              >
                <Image
                  className="mr-2 rounded-xl border-2 border-gray-300 dark:border-gray-600"
                  src={flags[locale]}
                  alt={languages[locale]}
                  width={24}
                  height={24}
                />
                <span>{languages[locale]}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
