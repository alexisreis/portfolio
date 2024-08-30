import { useI18n } from 'next-localization';
import List from '@/components/list/List';

import { organizations } from '@/data/organizations';

const OrganizationsList = () => {
  const i18n = useI18n();

  const organizationsList = organizations(i18n);

  return (
    <div className="content mt-8 sm:mt-12">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        {i18n.t('home.organizations.title')}
      </h2>
      <List items={organizationsList} />
    </div>
  );
};

export default OrganizationsList;
