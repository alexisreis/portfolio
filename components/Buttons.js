import Link from '@/components/Link';

export const StrokeButton = ({ text, href }) => {
  return (
    <Link
      className="my-auto ml-auto flex rounded-xl border border-primary-500 px-4 py-2 text-center font-medium text-primary-500 transition duration-300 ease-in-out hover:bg-primary-500 hover:text-background-color hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 dark:hover:border-primary-400 dark:hover:text-primary-400"
      href={href}
    >
      {text}
    </Link>
  );
};
