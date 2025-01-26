const DateSubtitle = ({ date }) => {
  return (
    <p className="inline-block flex-none translate-y-px rounded bg-gray-200 p-1 text-xs font-semibold leading-none text-primary-500 dark:bg-gray-700">
      {date}
    </p>
  );
};

export default DateSubtitle;
