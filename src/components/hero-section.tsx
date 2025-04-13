import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./BG3.mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center md:items-start justify-center h-full text-white text-center px-4 md:px-16 bg-black/50">
        <div className="mt-[-5%]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg w-full md:w-1/3 text-left">
            Порятунок безпритульних тварин
          </h1>
          <p className="text-lg md:text-2xl max-w-xl drop-shadow-md w-full md:w-1/2 text-left">
            Допоможіть тваринам, які залишилися без догляду, знайти новий дім.
            Підтримайте ініціативу: передайте знайдену тварину до притулку або
            подаруйте дім вихованцю, чий чекає на вас.
          </p>
          <div className="flex flex-row gap-4 mt-8 justify-center md:justify-start mx-0 md:mx-4">
            <Button
              size={'xl'}
              className="bg-white text-black hover:bg-gray-200 rounded-2xl"
            >
              Твій новий друг
            </Button>
            <Button
              size={'xl'}
              className="bg-white text-black hover:bg-gray-200 rounded-2xl"
            >
              Передати у добрі руки
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
