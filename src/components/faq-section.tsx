import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faq } from '@/constants';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const FAQSection = () => {
  return (
    <section className="container mx-auto my-30 p-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-roboto font-bold">Питання та відповіді</h1>
        <p className="text-md font-roboto font-normal mt-10">
          Питання та відповіді, впорядковані за популярністю.
        </p>
        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 md:grid-cols-2 p-4 my-10 gap-2 md:gap-10"
        >
          {/* Ліва колонка */}
          <div>
            {faq.slice(0, Math.ceil(faq.length / 2)).map((item, index) => (
              <AccordionItem key={index} value={`item-left-${index}`}>
                <AccordionTrigger className="font-roboto font-bold text-md">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-roboto font-normal text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
          <div className="block md:hidden border-b-1"></div>
          {/* Права колонка */}
          <div>
            {faq.slice(Math.ceil(faq.length / 2)).map((item, index) => (
              <AccordionItem key={index} value={`item-right-${index}`}>
                <AccordionTrigger className="font-roboto font-bold text-md">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-roboto font-normal text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>

        <div className="flex flex-col justify-center items-center my-10 gap-5">
          <h1 className="text-2xl font-roboto font-bold">
            Все ще маєте питання?
          </h1>
          <p className="text-md font-roboto font-normal">Зв'яжіться з нами</p>
          <Button
            variant={'outline'}
            size={'lg'}
            className="border-black rounded-2xl"
          >
            <Link to="/contact">Зв'язатися</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
