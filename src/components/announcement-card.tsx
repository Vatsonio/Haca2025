import { cn } from '@/lib/utils';

interface AnnouncementCardProps {
  animalType: string;
  animalName: string;
  animalDescription: string;
  animalImage: string;
  authorName: string;
  authorImage: string;
  publishedAt: string;
  className?: string;
}

const AnnouncementCard = ({
  animalType,
  animalName,
  animalDescription,
  animalImage,
  authorName,
  authorImage,
  publishedAt,
  className,
}: AnnouncementCardProps) => {
  const [animalStartName, ...animalLeft] = animalName.split(' ');

  return (
    <div className={cn('container mx-auto p-2 bg-gray-100', className)}>
      <div className="flex flex-col bg-white">
        <img
          src={animalImage}
          alt={animalName}
          className="aspect-[4/3] object-cover"
        />

        <div className="flex flex-col mt-4 gap-2">
          <h3 className="text-lg font-roboto font-medium">{animalType}</h3>
          <h2 className="text-2xl font-roboto font-normal">
            <span className="font-bold">{animalStartName}</span>
            {animalLeft.length > 0 ? ` ${animalLeft.join(' ')}` : ''}
          </h2>
          <p className="text-sm font-roboto font-normal">{animalDescription}</p>
        </div>
        <div className="flex flex-row items-start gap-2 p-3 w-full">
          <img
            className="object-cover rounded-full w-12 h-12"
            src={authorImage}
            alt={authorName}
          />
          <div className="flex flex-col gap-1">
            <span className="text-md font-roboto font-medium">
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

export default AnnouncementCard;
