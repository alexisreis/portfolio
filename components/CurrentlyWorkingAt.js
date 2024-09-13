// import { useI18n } from 'next-localization';
import Image from '@/components/Image';

const CurrentlyWorkingAt = ({ isMobileOnly }) => {
  // const i18n = useI18n();
  return (
    <div
      className={`border border-gray-500 rounded-2xl bg-gray-100 p-4 ${isMobileOnly ? 'block sm:hidden' : 'hidden sm:block'} dark:bg-gray-800 dark:text-white`}
    >
      <h3 className="font-bold text-xl mb-2">Currently working as a</h3>
      <div className="flex gap-4">
        <div className="h-12 w-12 flex justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
          <Image
            src={'/static/images/workxp/onepoint.svg'}
            width={50}
            height={50}
            alt={'Onepoint'}
            className="p-2"
          />
        </div>
        <div>
          <h3>Backend developer and cloud engineer</h3>
          <strong>at Onepoint, Paris</strong>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyWorkingAt;
