import { useI18n } from 'next-localization';
import List from '@/components/list/List';

import { workxp } from '@/data/workxp';

const WorkXpList = () => {
  const i18n = useI18n();

  const workxpList = workxp(i18n);

  return (
    <div className="content mt-4 sm:mt-12">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        {i18n.t('home.workxp.title')}
      </h2>
      <List items={workxpList} />
    </div>
  );
};

export default WorkXpList;
