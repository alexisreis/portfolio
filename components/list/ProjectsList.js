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
      <div className="flex flex-row justify-between items-center mb-4">
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

      <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-8">
        {projectsData.slice(0, MAX_DISPLAY).map((d) => (
          <Card
            key={d.title}
            title={d.title}
            date={d.date}
            description={d.description}
            imgSrc={d.imgSrc}
            href={d.href}
          />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default ProjectsList;
