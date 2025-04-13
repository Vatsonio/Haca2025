import { cn } from '@/lib/utils';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AboutUsInfoProps {
  icon: IconDefinition;
  title: string;
  description: string;
  className?: string;
}

const AboutUsInfo = ({
  icon,
  title,
  description,
  className,
}: AboutUsInfoProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-start text-left gap-3 mx-2 md:mx-0',
        className
      )}
    >
      <FontAwesomeIcon icon={icon} fontSize={50} />
      <h1 className="font-roboto text-2xl font-bold mt-2">{title}</h1>
      <p className="text-lg md:text-sm text-gray-700 font-roboto font-normal mt-2 md:mt-5">
        {description}
      </p>
    </div>
  );
};

export default AboutUsInfo;
