import { useI18n } from 'next-localization';

import DownloadIcon from '../../assets/download.svg';
import GithubIcon from '../../assets/github.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import MailIcon from '../../assets/mail.svg';

const socialsList = (i18n) => [
  {
    href: 'https://www.linkedin.com/in/alexis-reis-6aa315216/',
    icon: <LinkedinIcon />,
  },
  {
    href: 'https://github.com/alexisreis',
    icon: <GithubIcon />,
  },
  {
    href: 'mailto:alexisreis@outlook.fr',
    icon: <MailIcon />,
  },
  {
    href: i18n.t('home.download_resume_link'),
    icon: <DownloadIcon />,
  },
];

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="text-gray-600 hover:text-primary-500 transition-colors duration-300 dark:text-gray-200 dark:hover:text-primary-400"
    >
      <div className="w-8 h-8">{icon}</div>
    </a>
  );
};

const SocialIconsList = () => {
  const i18n = useI18n();
  const socials = socialsList(i18n);

  return (
    <div className="flex gap-3">
      {socials.map((social) => (
        <SocialIcon key={social.href} href={social.href} icon={social.icon} />
      ))}
    </div>
  );
};

export default SocialIconsList;
