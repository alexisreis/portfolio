import Image from '@/components/Image';
import { useI18n } from 'next-localization';

const presentationTiles = (i18n) => [
  {
    title: 'INSA Lyon',
    image: '/static/images/profile/rhino.png',
    text: i18n.t('home.tiles.insa.p1'),
  },
  {
    title: i18n.t('home.tiles.passionate.title'),
    image: '/static/images/profile/tech.png',
    text: i18n.t('home.tiles.passionate.p1'),
  },
  {
    title: i18n.t('home.tiles.sport.title'),
    image: '/static/images/profile/handball.png',
    text: i18n.t('home.tiles.sport.p1'),
  },
  {
    title: i18n.t('home.tiles.cinema.title'),
    image: '/static/images/profile/cinema.png',
    text: i18n.t('home.tiles.cinema.p1'),
  },
];

const Tile = ({ title, image, text }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105 sm:w-3/4 md:w-1/4">
      <span className="block text-center text-xl font-bold text-gray-600 dark:text-gray-200">
        {title}
      </span>
      <Image src={image} alt={title} width={80} height={80} className="dark:invert my-2" />
      <span className="block text-center text-sm text-gray-600 dark:text-gray-200">{text}</span>
    </div>
  );
};

const PresentationTiles = () => {
  const i18n = useI18n();

  const tiles = presentationTiles(i18n);

  return (
    <div className="my-4 space-y-4 text-zinc-500 dark:text-slate-300">
      <div className="-p-4 flex flex-row flex-wrap justify-center">
        {tiles.map((tile) => (
          <Tile key={tile.title} title={tile.title} image={tile.image} text={tile.text} />
        ))}
      </div>
    </div>
  );
};

export default PresentationTiles;
