import Mail from '../../assets/mail.svg';
import Github from './github.svg';
import Linkedin from './linkedin.svg';

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

const SocialIcon = ({
  kind,
  href,
  size = 8,
  color = 'text-gray-700',
  hoverColor = 'text-primary-500',
  darkColor = 'text-gray-200',
  darkHoverColor = 'text-primary-500',
}) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className={`text-sm text-gray-500 transition hover:text-gray-600 h-${size} w-${size}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current ${color} hover:${hoverColor} dark:${darkColor} dark:hover:${darkHoverColor} h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
