import { useI18n } from 'next-localization';
import Image from '@/components/Image';

const CurrentlyWorkingAt = ({ isMobileOnly }) => {
  const i18n = useI18n();

  return (
    <div
      className={`rounded-2xl border border-gray-500 p-4 ${isMobileOnly ? 'block sm:hidden' : 'hidden sm:block'} dark:border-gray-600 dark:text-white`}
    >
      <h3 className="mb-2 text-xl font-bold">{i18n.t('home.currently_working_at.title')}</h3>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
          <Image
            src={'/static/images/workxp/onepoint.svg'}
            width={50}
            height={50}
            alt={'Onepoint'}
            className="p-2"
          />
        </div>
        <strong>{i18n.t('home.currently_working_at.company')}</strong>
      </div>
    </div>
  );
};

export default CurrentlyWorkingAt;
