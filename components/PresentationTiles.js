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
    <div className="flex w-full flex-col items-center justify-center p-4 transition duration-300 ease-in-out hover:scale-105">
      <span className="block text-center text-xl font-bold text-zinc-800 dark:text-white">
        {title}
      </span>
      <div className="h-auto w-[80px]">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="my-2 h-full w-full object-contain dark:invert"
        />
      </div>
      <span className="block text-center text-sm text-zinc-800 dark:text-white">{text}</span>
    </div>
  );
};

const PresentationTiles = () => {
  const i18n = useI18n();

  const tiles = presentationTiles(i18n);

  return (
    <div className="flex justify-between">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {tiles.map((tile, index) => (
          <Tile key={index} title={tile.title} image={tile.image} text={tile.text} />
        ))}
      </div>
    </div>
  );
};

export default PresentationTiles;
