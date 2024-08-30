import { useI18n } from 'next-localization';
import List from '@/components/list/List';

import { education } from '@/data/education';

const EducationList = () => {
  const i18n = useI18n();

  const educationList = education(i18n);

  return (
    <div className="content mt-8 sm:mt-12">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        {i18n.t('home.education.title')}
      </h2>
      <List items={educationList} />
    </div>
  );
};

export default EducationList;
