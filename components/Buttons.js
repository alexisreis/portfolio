import Link from '@/components/Link';

export const StrokeButton = ({ text, href }) => {
  return (
    <Link
      className="flex ml-auto my-auto border border-primary-500 px-4 py-2 rounded-xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-500 hover:text-background-color dark:hover:border-primary-400 text-center transition duration-300 ease-in-out font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
      href={href}
    >
      {text}
    </Link>
  );
};
