import Link from '@/components/Link';

export const StrokeButton = ({ text, href }) => {
  return (
    <Link
      className="flex ml-auto my-auto border border-primary-500 px-4 py-2 rounded-xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-primary-700 dark:hover:border-primary-400 text-center"
      href={href}
    >
      {text}
    </Link>
  );
};
