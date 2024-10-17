import { useI18n } from 'next-localization';
import List from '@/components/list/List';

import { societies } from '@/data/societies';

const OrganizationsList = () => {
  const i18n = useI18n();

  const organizationsList = societies(i18n);

  return (
    <div className="content mt-8 sm:mt-8">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        {i18n.t('home.societies.title')}
      </h2>
      <List items={organizationsList} />
    </div>
  );
};

export default OrganizationsList;
