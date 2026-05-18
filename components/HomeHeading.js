import { useI18n } from 'next-localization';
import Image from '@/components/Image';
import SocialIconsList from '@/components/list/SocialIconsList';
import ProfilePic from '@/components/ProfilePic';

const HomeHeading = () => {
  const i18n = useI18n();

  return (
    <div className="mb-4 space-y-2 md:space-y-5">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-12">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center text-5xl font-bold tracking-tight text-zinc-800 dark:text-white">
            Alexis Reis
          </h1>
          <h2 className="text-center text-xl font-bold tracking-tight text-primary-600 md:text-xl">
            {i18n.t('home.status')}
          </h2>
          <SocialIconsList />

          {/*<CurrentlyWorkingAt isMobileOnly={false} />*/}

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
        <ProfilePic />
      </div>
      {/*<CurrentlyWorkingAt isMobileOnly={true} />*/}
      {/*       <Link
          href="mailto:alexisreis@outlook.fr"
          aria-label="Contact me!"
          className="mt-8 block animate-bounce items-center space-x-4 rounded-xl bg-red-500 p-6 text-white shadow-md transition duration-300 hover:bg-red-600 hover:shadow-lg focus:ring-4 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-red-500/20 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400/40 dark:focus:ring-offset-red-400/20 sm:hidden"
          title={i18n.t('home.contact_me')}
        >
          {i18n.t('home.looking_for')}
          <strong> {i18n.t('home.looking_for_what')} </strong>
        </Link>*/}
    </div>
  );
};

export default HomeHeading;
