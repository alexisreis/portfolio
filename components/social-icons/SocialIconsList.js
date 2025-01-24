import { useI18n } from 'next-localization';

const SocialIconsList = () => {
  const i18n = useI18n();

  return (
    <div className="mt-4 flex flex-wrap gap-4 text-center w-full justify-between">
      <a
        className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-sky-600 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-sky-500 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
        href="https://www.linkedin.com/in/alexis-reis-6aa315216/"
        rel="noreferrer"
        target="_blank"
      >
        <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
      <a
        className="focusable dark:hover:gray-400/80 flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-black py-2 px-2.5 font-medium text-white shadow-lg shadow-indigo-500/10 transition selection:bg-white/30 hover:bg-gray-800/80 hover:shadow-indigo-500/5 focus:ring-indigo-500/40 dark:bg-white dark:text-black dark:shadow-indigo-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-gray-100/80 dark:hover:shadow-gray-400/5 dark:focus:ring-indigo-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
        href="https://github.com/alexisreis"
        rel="noreferrer"
        target="_blank"
      >
        <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <span className="hidden sm:inline">GitHub</span>
      </a>
      <a
        className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-lime-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
        href="mailto:alexisreis@outlook.fr"
      >
        <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <span className="hidden sm:inline">Email</span>
      </a>

      <a
        className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-primary-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-md shadow-gray-500/10 transition duration-300 hover:bg-red-600 hover:shadow-lg focus:ring-4 focus:ring-primary-500/40 focus:ring-offset-2 focus:ring-offset-primary-500/20 dark:hover:bg-primary-600 dark:focus:ring-primary-400/40 dark:focus:ring-offset-primary-400/20 sm:w-auto sm:px-3 sm:pl-2.5 dark:text-zinc-900"
        href={i18n.t('home.download_resume_link')}
        download
      >
        <svg
          height="24"
          role="presentation"
          width="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="hidden sm:inline">{i18n.t('home.download_resume')}</span>
      </a>
    </div>
  );
};

export default SocialIconsList;
