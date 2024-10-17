import { useI18n } from 'next-localization';
import List from '@/components/list/List';

import { formation } from '@/data/formation';

const EducationList = () => {
  const i18n = useI18n();

  const educationList = formation(i18n);

  return (
    <div className="content mt-8 sm:mt-8">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        {i18n.t('home.formation.title')}
      </h2>
      <List items={educationList} />
    </div>
  );
};

export default EducationList;
