import { useRouter } from 'next/router';

import Image from './Image';
import Link from './Link';
import { useI18n } from 'next-localization';
import DateSubtitle from '@/components/DateSubtitle';

const Card = ({ title, date, description, imgSrc, href }) => {
  const router = useRouter();
  const currentLocale = router.locale;
  const i18n = useI18n();

  return (
    <Link
      href={href}
      aria-label={`Link to ${title}`}
      locale={currentLocale}
      className="flex flex-row md:flex-col transition duration-300 ease-in-out hover:scale-[103%] w-full md:w-[48%] border-2 border-gray-200 border-opacity-60 dark:border-gray-700 overflow-hidden rounded-md"
    >
      <div className="hidden md:block md:w-full sm:h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          alt={title}
          src={imgSrc}
          className="object-contain w-full h-full"
          width={500}
          height={300}
        />
      </div>
      <div className="p-6 bg-white dark:bg-background-color-dark">
        <h2 className="text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <DateSubtitle date={date} />
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <span
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 hover:underline underline-offset-4 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            {i18n.t('components.card.readPost')} &rarr;
          </span>
        )}
      </div>
    </Link>
  );
};

export default Card;
