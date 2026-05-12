import { useI18n } from 'next-localization';
import { StrokeButton } from '@/components/Buttons';
import Image from '@/components/Image';
import DateSubtitle from '@/components/DateSubtitle';
import ReadMore from '@/components/ReadMore';
import Link from '@/components/Link';

const ListItem = ({ title, img, dates, description, href, type }) => {
  const i18n = useI18n();

  return (
    <li className="my-4 flex items-start gap-4">
      <Link href={href}>
        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-md bg-gray-200 p-2 dark:bg-gray-700">
          <Image src={img} alt={title} width={56} height={56} className="rounded-md" />
        </div>
      </Link>
      <div className="flex min-w-0 flex-col justify-center">
        <div className="mb-1 flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
          <span className="font-semibold text-zinc-700 dark:text-zinc-100">{title}</span>
          <DateSubtitle date={dates} />
        </div>
        <p className="flex-1 text-zinc-500 dark:text-zinc-400">{description}</p>
        {/* <ReadMore>
          <p>
            Hello my name is John and I'm really trying to code this thinig right threr but not sure
            if it's gonna work to be honnest
          </p>
        </ReadMore> */}
      </div>
      {type === 'certifications' && (
        <StrokeButton text={i18n.t('components.listItem.viewBadge')} href={href} />
      )}
    </li>
  );
};

export default ListItem;
