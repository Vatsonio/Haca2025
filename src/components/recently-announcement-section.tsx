import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { CategoryFilterBtn } from '@/components';

const RecentlyAnnouncementSection = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section className="container mx-auto my-30 p-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-roboto font-bold">Нещодавні оголошення</h1>
        <CategoryFilterBtn
          filter={filter}
          onClick={setFilter}
          className="mt-15"
        />

        <div className="flex justify-center items-center my-10">
          <Button
            variant={'outline'}
            size={'xl'}
            className="border-black rounded-2xl"
          >
            <Link to="/announcements">Переглянути всі</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAnnouncementSection;
