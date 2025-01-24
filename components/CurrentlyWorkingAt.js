import { useI18n } from 'next-localization';
import Image from '@/components/Image';

const CurrentlyWorkingAt = ({ isMobileOnly }) => {
  const i18n = useI18n();

  return (
    <div
      className={`border border-gray-500 rounded-2xl p-4 ${isMobileOnly ? 'block sm:hidden' : 'hidden sm:block'} dark:text-white dark:border-gray-600`}
    >
      <h3 className="font-bold text-xl mb-2">{i18n.t('home.currently_working_at.title')}</h3>
      <div className="flex gap-4 items-center">
        <div className="h-12 w-12 flex justify-center items-center rounded-lg bg-gray-200 dark:bg-gray-700">
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
