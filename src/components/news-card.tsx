import { cn } from '@/lib/utils';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  authorName: string;
  authorImageUrl: string;
  publishedAt: string;
  className?: string;
}

const NewsCard = ({
  title,
  description,
  imageUrl,
  authorName,
  authorImageUrl,
  publishedAt,
  className,
}: NewsCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col p-4 aspect-[3/3] bg-white rounded-sm shadow-md',
        className
      )}
    >
      <img
        className="aspect-[3/2] object-cover rounded-md"
        src={imageUrl}
        alt={title}
      />

      <div className="flex flex-col mt-4">
        <h2 className="text-lg font-roboto font-medium mb-2">{title}</h2>
        <p className="text-sm font-roboto font-normal mb-4">{description}</p>

        <div className="flex flex-row items-start gap-2 p-3 w-full mx-auto rounded-xl bg-gray-100/80">
          <img
            className="aspect-square object-cover rounded-xl w-12 h-12"
            src={authorImageUrl}
            alt={authorName}
          />
          <div className="flex flex-col gap-1">
            <span className="text-md font-roboto font-normal">
              {authorName}
            </span>
            <span className="text-xs font-roboto font-normal text-gray-500">
              {publishedAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
