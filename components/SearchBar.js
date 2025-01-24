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
        className="block w-full py-4 pl-12 pr-3 focus:border-primary-500 text-gray-600 focus:ring-primary-500 rounded-md sm:text-md border-gray-300 dark:border-white dark:bg-gray-800 dark:text-white focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
