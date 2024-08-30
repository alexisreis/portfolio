import Image from '@/components/Image';

const ListItem = ({ title, img, dates, description, href }) => {
  return (
    <li className="my-5 flex items-center gap-4">
      <a className="link focusable" href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center justify-center h-14 w-14 rounded-md bg-gray-100">
          <Image src={img} alt={title} width={56} height={56} className="rounded-md" />
        </div>
      </a>
      <div className="flex min-w-0 flex-col justify-center">
        <p className="mb-1 flex items-center">
          <span className="font-semibold text-zinc-700 dark:text-zinc-100">{title}</span>
          <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-200 p-1 text-xs font-semibold leading-none text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
            {dates}
          </span>
        </p>
        <p className="flex-1 text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
    </li>
  );
};

export default ListItem;
