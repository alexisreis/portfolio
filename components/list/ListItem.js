import Image from '@/components/Image';
import Link from '@/components/Link';
import { useI18n } from 'next-localization';

const ListItem = ({ title, img, dates, description, href, type }) => {
  const i18n = useI18n();
  return (
    <li className="my-4 flex items-start gap-4">
      <a className="link focusable" href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center justify-center h-14 w-14 p-2 rounded-md bg-gray-100 dark:bg-gray-700">
          <Image src={img} alt={title} width={56} height={56} className="rounded-md" />
        </div>
      </a>
      <div className="flex min-w-0 flex-col justify-center">
        <p className="mb-1 flex flex-col items-start sm:flex-row sm:items-center">
          <span className="font-semibold text-zinc-700 dark:text-zinc-100">{title}</span>
          <span className="sm:ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-200 p-1 text-xs font-semibold leading-none text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
            {dates}
          </span>
        </p>
        <p className="flex-1 text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
      {type === 'certifications' && (
        <Link
          className="flex ml-auto my-auto border border-blue-600 px-4 py-2 rounded-xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-blue-700 dark:hover:border-primary-400 text-center"
          href={href}
        >
          {i18n.t('components.listItem.viewBadge')}
        </Link>
      )}
    </li>
  );
};

export default ListItem;
