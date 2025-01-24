import { useI18n } from 'next-localization';
import List from '@/components/list/List';

import { certifications } from '@/data/certifications';
import Divider from '@/components/Divider';

const CertificationsList = () => {
  const i18n = useI18n();

  const certificationsList = certifications(i18n);

  return (
    <div className="content mt-8 sm:mt-8">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        {i18n.t('home.certifications.title')}
      </h2>
      <List items={certificationsList} />
      <Divider />
    </div>
  );
};

export default CertificationsList;
