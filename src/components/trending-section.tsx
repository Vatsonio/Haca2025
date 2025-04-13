import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { news } from '@/constants';
import { NewsCard } from '@/components';

const TrendingSection = () => {
  return (
    <section className="container mx-auto my-30 p-4">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-4xl font-roboto font-bold">Актуальне</h1>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full mt-5 z-40"
        >
          <CarouselContent className="my-5">
            {news.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                  <NewsCard
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    authorName={item.authorName}
                    authorImageUrl={item.authorImageUrl}
                    publishedAt={item.publishedAt}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TrendingSection;
