import Image from '@/components/Image';
import formatDate from '@/lib/utils/formatDate';

const PostAuthorCard = ({ authorDetails, date, readingTime }) => {
  const author = authorDetails[0];

  return (
    <div className="mb-1 ml-2 flex items-center space-x-2">
      {author.avatar && (
        <Image
          src={author.avatar}
          width={24}
          height={24}
          alt={author.name}
          className="mr-1 h-10 w-10 rounded-full"
        />
      )}
      <div>
        <dl className="whitespace-nowrap">
          <dt className="sr-only">Name</dt>
          <dd className="text-base font-semibold text-gray-800 dark:text-gray-100">
            {author.name}
          </dd>
        </dl>
        <div className="mb-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd>
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
          <div>·</div>
          <div>{readingTime.text}</div>
        </div>
      </div>
    </div>
  );
};

export default PostAuthorCard;
