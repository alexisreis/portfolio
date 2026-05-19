import Link from '@/components/Link';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import { useI18n } from 'next-localization';
import Divider from '@/components/Divider';
import { StrokeButton } from '@/components/Buttons';

const MAX_DISPLAY = 2;

const ProjectsList = () => {
  const i18n = useI18n();

  return (
    <div className="content mt-8 sm:mt-8">
      <div className="flex-start mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
        <div>
          <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
            {i18n.t('projects.title')}
          </h2>
          <p className="leading-relaxed text-zinc-500 dark:text-slate-300">
            {i18n.t('projects.subtitle')}
          </p>
        </div>
        <StrokeButton text={i18n.t('home.see_all_projects')} href={'/projects'}></StrokeButton>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:justify-between">
        {projectsData.slice(0, MAX_DISPLAY).map((d) => (
          <Card key={d.i18nKey} i18nKey={d.i18nKey} date={d.date} imgSrc={d.imgSrc} href={d.href} />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default ProjectsList;
