import { useI18n } from 'next-localization';
import List from '@/components/list/List';

import { certifications } from '@/data/certifications';

const CertificationsList = () => {
  const i18n = useI18n();

  const certificationsList = certifications(i18n);

  return (
    <div className="content mt-4 sm:mt-12">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        {i18n.t('home.certifications.title')}
      </h2>
      <List items={certificationsList} />
    </div>
  );
};

export default CertificationsList;
