import { categories } from '@/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterBtnProps {
  filter: string;
  onClick: (filter: string) => void;
  className?: string;
}

const CategoryFilterBtn = ({
  filter,
  onClick,
  className,
}: CategoryFilterBtnProps) => {
  return (
    <div className={cn('flex gap-4 justify-center', className)}>
      {categories.map(cat => (
        <Button
          key={cat.value}
          variant={filter === cat.value ? 'outline' : 'ghost'}
          onClick={() => onClick(cat.value)}
          size={'lg'}
          className="border-black rounded-2xl"
        >
          {cat.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilterBtn;
