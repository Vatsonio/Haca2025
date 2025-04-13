import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const NearShelterSection = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-roboto font-bold w-1/2 text-center">
          Не зволікайте - долучайтесь до допомоги вже сьогодні
        </h1>
        <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center mx-10 mt-10">
          <h2 className="text-2xl font-roboto font-bold text-left">
            Притулки поблизу
          </h2>
          <div className="flex flex-row items-center my-10 gap-1 hover:cursor-pointer hover:text-blue-500">
            <MapPin />
            <p className="text-sm font-roboto font-medium">Показати на мапі</p>
          </div>
        </div>

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

export default NearShelterSection;
