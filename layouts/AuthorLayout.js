import Image from '@/components/Image';
import { PageSEO } from '@/components/SEO';
import SocialIconsList from '@/components/list/SocialIconsList';

export default function AuthorLayout({ children, frontMatter }) {
  const { name, occupation, company, email, linkedin, github } = frontMatter;

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div>
        <div className="space-y-2 pb-4 pt-6 md:space-y-5">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
            About
          </h1>
        </div>
        <div className="items-start">
          <div className="flex flex-col items-center rounded-lg bg-slate-700 bg-opacity-10 p-2 text-center dark:bg-slate-100 md:flex-row">
            <div>
              <Image
                src="/static/images/profile.jpg"
                alt="avatar"
                width={150}
                height={150}
                className="rounded-full"
              />

              <h3 className="py-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>

              <SocialIconsList iconSize="w-5 h-5" />
            </div>

            <div className="px-8">
              <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
              <div className="text-gray-500 dark:text-gray-400">{company}</div>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-zinc-500 dark:text-slate-300">
          <div className="my-4 leading-loose">
            <div className="prose max-w-none pb-8 pt-8 text-zinc-500 dark:prose-dark xl:col-span-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
