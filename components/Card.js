import { useRouter } from 'next/router';

import Image from './Image';
import Link from './Link';
import { useI18n } from 'next-localization';

const Card = ({ title, date, description, imgSrc, href }) => {
  const router = useRouter();
  const currentLocale = router.locale;
  const i18n = useI18n();

  return (
    <Link
      href={href}
      aria-label={`Link to ${title}`}
      locale={currentLocale}
      className="flex flex-row md:flex-col transition duration-300 ease-in-out hover:scale-105 w-full md:w-[48%] border-2 border-gray-200 border-opacity-60 dark:border-gray-700 overflow-hidden rounded-md"
    >
      <Image
        alt={title}
        src={imgSrc}
        className="object-cover md:w-full w-1/2"
        width={500}
        height={300}
      />
      <div className="p-6 bg-white dark:bg-background-color">
        <h2 className="text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <p className="mb-3 inline-block flex-none translate-y-px rounded bg-zinc-200 p-1 text-xs font-semibold leading-none text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
          {date}
        </p>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <span
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
