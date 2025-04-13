import { Button } from '@/components/ui/button';
import {
  faHeart,
  faShieldHalved,
  faFire,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { AboutUsInfo } from '@/components';

const AboutUsSection = () => {
  return (
    <section className="container mx-auto flex my-20 p-4 justify-center items-center">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-3 w-full text-left items-start">
          <h1 className="font-roboto text-4xl font-bold">Про нас</h1>
          <p className="text-sm text-gray-700 font-roboto font-normal w-full md:w-5/6 my-4">
            Ми - платформа, присвячена порятунку безпритульних тварин та пошук
            для них люблячих домівок. Наша місія - об'єднати небайдужих людей,
            щоб кожна тварина мала шанс на щасливе життя.
          </p>
          <Button size={'lg'} className="rounded-2xl">
            Доєднатись
          </Button>
        </div>
        <div className="flex flex-col gap-20 w-full mt-10 md:mt-0">
          <AboutUsInfo
            icon={faHeart}
            title="Допомога тваринам"
            description="Ми прияємо передачі знайдених тварин до притулків та підтримуємо
              процес адопції, щоб кожен улюбленець знайшов свою сім'ю."
          />

          <AboutUsInfo
            icon={faShieldHalved}
            title="Надійність та прозорість"
            description="Ми співпрацюємо лише з перевіреними притулками, забезпечуючи
              безпеку та відповідальність на кожному етапі."
          />
        </div>
        <div className="flex flex-col gap-15 w-full">
          <AboutUsInfo
            icon={faFire}
            title="Актуальність"
            description="Після початку повномастштабного вторгнення, мільйони були змушені
              терміново покидати домівки. Тисячі тварин опинилися без опіки, а
              переповнені притулки часто не можуть забезпечити їм належний
              догляд."
          />

          <AboutUsInfo
            icon={faUserGroup}
            title="Спільнота небайдужих"
            description="Наша платформа відкрита для всіх, хто хоче зробити внесок - від
              волонтерства до поширення інформації."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
