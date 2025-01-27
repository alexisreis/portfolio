import SearchIcon from '../assets/search.svg';

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div className="relative block">
      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-600 dark:text-white">
        <SearchIcon className="h-6 w-6" />
      </span>
      <input
        aria-label={placeholder}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="sm:text-md block w-full rounded-md border-gray-300 py-4 pl-12 pr-3 text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-white dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
};

export default SearchBar;
