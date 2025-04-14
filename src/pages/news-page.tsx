import { Input } from '@/components/ui/input';
import { NewsCard } from '@/components';
import { useState } from 'react';
import { Link } from 'react-router';
import { news } from '@/constants';


const NewsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    // Update filteredNews to use imported news
    const filteredNews = news.filter(newsItem =>
      newsItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      newsItem.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="flex flex-col w-full">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] min-h-[300px] bg-black">
        <img
          src="/pexels-aleksandr-nadyojin-2954845-4492142.jpg"
          alt="News Hero"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-roboto font-bold text-center px-4">
            Новини та блог
          </h1>
        </div>
      </div>

      {/* Content Section with Row */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row justify-between max-w-[1440px] mx-auto gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="w-full lg:max-w-[768px]">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-roboto font-bold leading-tight mb-4">
                Новини та блог
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-roboto font-normal leading-relaxed">
                Дізнайтесь про життя наших тваринок, історії успіху та як ви можете допомогти.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 overflow-x-auto">
              {['#ІВЕНТ', '#ЩАСЛИВА_ЛАПА', '#КОТИКИ', '#ПЕСИКИ'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm font-roboto font-light whitespace-nowrap cursor-pointer hover:bg-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[464px] mt-8 lg:mt-0">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                <div className="w-full sm:w-1/2 lg:w-[216px]">
                  <h3 className="text-base sm:text-lg md:text-xl font-roboto font-bold leading-7 mb-1">Хто?</h3>
                  <p className="text-xs sm:text-sm md:text-base font-roboto font-normal leading-6 text-gray-600">
                    Притулок "Щаслива лапа"
                  </p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-[216px]">
                  <h3 className="text-base sm:text-lg md:text-xl font-roboto font-bold leading-7 mb-1">Дата</h3>
                  <p className="text-xs sm:text-sm md:text-base font-roboto font-normal leading-6 text-gray-600">
                    Квітень 2025
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                <div className="w-full sm:w-1/2 lg:w-[216px]">
                  <h3 className="text-base sm:text-lg md:text-xl font-roboto font-bold leading-7 mb-1">Роль</h3>
                  <p className="text-xs sm:text-sm md:text-base font-roboto font-normal leading-6 text-gray-600">
                    Організатор
                  </p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-[216px]">
                  <h3 className="text-base sm:text-lg md:text-xl font-roboto font-bold leading-7 mb-1">Вебсайт</h3>
                  <p className="text-xs sm:text-sm md:text-base font-roboto font-normal leading-6 text-gray-600 break-all">
                    www.divass.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-8 md:mb-12">
          <Input
            type="search"
            placeholder="Пошук новин..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 px-4 rounded-2xl border-2 border-gray-200 focus:border-black transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <NewsCard
                key={index}
                {...item}
                className="hover:shadow-lg transition-shadow duration-300"
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Новин за вашим запитом не знайдено.</p>
          )}
        </div>
      </div>

      {/* --- СЕГМЕНТ 1: Можливості допомогти (Текст зліва, Картинка справа на LG) --- */}
      {/* Адаптивні відступи: py-16 (моб) -> lg:py-[112px] (десктоп), px-4 (моб) -> sm:px-8 (планшет) -> lg:px-[80px] (десктоп) */}
      <div className="w-full bg-white py-16 lg:py-[112px] px-4 sm:px-8 lg:px-[80px]">
        {/* Адаптивний проміжок: gap-8 (моб/вертикальний) -> lg:gap-[80px] (десктоп/горизонтальний) */}
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-[80px]">

          {/* Ліва колонка: Текст (Завжди перша на моб, перша на LG) */}
          <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-1">
             <p className="font-roboto text-sm font-medium text-gray-600 mb-2">Весняний день відкритих дверей у притулку</p>
             {/* Адаптивний розмір заголовка: text-3xl (моб) -> md:text-4xl (планшет) -> lg:text-5xl (десктоп) */}
             <h2 className="font-roboto text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
               Можливості допомогти
             </h2>
             <p className="font-roboto text-base font-normal text-gray-700 mb-4 leading-relaxed">
             Шановні друзі, ми раді запросити вас на наш традиційний весняний день відкритих дверей, який відбудеться 20 квітня 2025 року! Це чудова нагода познайомитися з нашими котиками, песиками та іншими тваринами, які шукають дім. Ви зможете поспілкуватися з нашими волонтерами, дізнатися більше про те, як працює притулок, і, можливо, знайти нового члена сім’ї.
             </p>
             <p className="font-roboto text-base font-normal text-gray-700 mb-4 leading-relaxed">
             Ми підготували для вас цікаву програму: майстер-класи з догляду за тваринами, фотосесії з нашими улюбленцями та благодійний ярмарок. На ярмарку ви зможете придбати сувеніри ручної роботи, виготовлені нашими волонтерами, а всі зібрані кошти підуть на потреби притулку. Також ми організуємо невеликий фуршет, щоб ви могли відпочити та поспілкуватися з іншими любителями тварин.
             </p>
              <p className="font-roboto text-base font-normal text-gray-700 mb-6 leading-relaxed">
              Захід проходитиме з 10:00 до 16:00 за адресою: вул. Сонячна, 15, м. Київ. Ми будемо раді бачити всіх, хто хоче дізнатися більше про нашу діяльність або просто провести день у компанії милих тваринок. Чекаємо на вас із нетерпінням, адже разом ми можемо зробити більше для тих, хто потребує нашої турботи!
             </p>
             {/* Кнопки вже адаптивні: flex-col (xs) -> sm:flex-row (sm+) */}
             <div className="flex flex-col sm:flex-row gap-4 mt-4">
               <Link
                 to="/register" // Приклад посилання
                 className="px-6 py-3 border border-gray-800 text-gray-800 rounded-full font-roboto font-medium hover:bg-gray-100 transition-colors text-center"
               >
                 Зареєструватись
               </Link>
               <button className="px-6 py-3 bg-gray-800 text-white rounded-full font-roboto font-medium hover:bg-gray-700 transition-colors">
                 Дізнатися більше
               </button>
             </div>
          </div>

          {/* Права колонка: Картинка (Друга на моб, друга на LG) */}
          {/* mt-8 для відступу зверху на моб, коли контент йде після тексту, lg:mt-0 скидає відступ на десктопі */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2 lg:order-2">
            <img
              src="/pexels-bertellifotografia-16652367.jpg"
              alt="Собака в бандані на дні відкритих дверей притулку"
              className="w-full h-auto max-h-[640px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/* --- Кінець СЕГМЕНТУ 1 --- */}

      {/* --- СЕГМЕНТ 2: Що ми зробили (Картинка зліва на LG, Текст справа на LG) --- */}
      {/* Адаптивні відступи */}
      <div className="w-full bg-gray-50 py-16 lg:py-[112px] px-4 sm:px-8 lg:px-[80px]">
        {/* Адаптивний проміжок */}
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-[80px]">

          {/* Ліва колонка: Картинка (Перша на моб, перша на LG) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
             <img
              src="/pexels-tatiana-azatskaya-3616232.jpg"
              alt="Кіт Мурчик загорнутий у ковдру"
              className="w-full h-auto max-h-[640px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Права колонка: Текст (Друга на моб, друга на LG) */}
          {/* mt-8 для відступу зверху на моб, lg:mt-0 скидає відступ */}
          <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-2 mt-8 lg:mt-0">
             <p className="font-roboto text-sm font-medium text-gray-600 mb-2">Мурчик знайшов дім: історія одного котика, який змінив усе</p>
             {/* Адаптивний розмір заголовка */}
             <h2 className="font-roboto text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
               Що ми зробили
             </h2>
             <p className="font-roboto text-base font-normal text-gray-700 mb-4 leading-relaxed">
             Мурчик потрапив до нас у 2024 році — маленьке кошеня, яке ми знайшли на вулиці в холодний осінній день. Він був наляканим, худим і потребував термінової медичної допомоги: у нього виявили інфекцію, а шерсть була в жахливому стані. Наші волонтери доглядали його, годували, лікували, і з часом Мурчик почав одужувати, стаючи все більш грайливим і довірливим.
             </p>
             <p className="font-roboto text-base font-normal text-gray-700 mb-4 leading-relaxed">
             Після кількох місяців у притулку Мурчик перетворився на пухнастого красеня з блискучою шерстю та веселим характером. Він любив сидіти на підвіконні, спостерігаючи за птахами, і муркотіти, коли хтось брав його на руки. У січні 2025 року його помітила сім’я з двох дітей, які одразу закохалися в цього котика і вирішили забрати його до себе.
             </p>
              <p className="font-roboto text-base font-normal text-gray-700 mb-6 leading-relaxed">
              Тепер Мурчик живе в теплому домі, обожнює спати на дивані та гратися з дітьми. Ця історія — лише одна з багатьох, які ми переживаємо щомісяця, але вона особлива, адже показує, як любов і турбота можуть змінити життя тварини. Ми вдячні всім, хто підтримує нас у цій важливій справі, і запрошуємо вас дізнатися, як ви можете допомогти іншим тваринам, таким як Мурчик, знайти свій дім.
             </p>
             {/* Кнопки адаптивні */}
             <div className="flex flex-col sm:flex-row gap-4 mt-4">
               <button className="px-6 py-3 border border-gray-800 text-gray-800 rounded-full font-roboto font-medium hover:bg-gray-100 transition-colors">
                 Читати історію
               </button>
               <button className="px-6 py-3 bg-gray-800 text-white rounded-full font-roboto font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                 Підтримати котиків <span role="img" aria-label="cat">🐈</span>
               </button>
             </div>
          </div>
        </div>
      </div>
      {/* --- Кінець СЕГМЕНТУ 2 --- */}

      {/* --- НОВИЙ СЕГМЕНТ 3: Результат (Текст зліва на LG, Картинка справа на LG) --- */}
      {/* Адаптивні відступи */}
      <div className="w-full bg-white py-16 lg:py-[112px] px-4 sm:px-8 lg:px-[80px]">
        {/* Адаптивний проміжок */}
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-[80px]">

          {/* Ліва колонка: Текст (Перша на моб, перша на LG) */}
          <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-1">
             <p className="font-roboto text-sm font-medium text-gray-600 mb-2">50 тваринок знайшли дім у 2025 році: разом ми досягли цієї мети!</p>
             {/* Адаптивний розмір заголовка */}
             <h2 className="font-roboto text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
               Результат
             </h2>
             <p className="font-roboto text-base font-normal text-gray-700 mb-4 leading-relaxed">
               Цей рік став особливим для притулку "Щаслива лапа". Завдяки вашій підтримці, невтомній роботі волонтерів та небайдужості наших відвідувачів ми змогли прилаштувати 50 тваринок у нові люблячі сім'ї! Серед них – 30 котиків, 15 песиків і навіть 5 кроликів, які тепер живуть у теплі та затишку.
             </p>
             <p className="font-roboto text-base font-normal text-gray-700 mb-4 leading-relaxed">
               Кожна історія прилаштування – це результат спільної роботи. Ми проводили регулярні акції, розповідали про наших підопічних у соціальних мережах і співпрацювали з місцевими громадами, щоб знайти для тваринок найкращих господарів. Особливо тішить те, що багато з наших тваринок, які провели в притулку понад рік, нарешті знайшли дім – це стало можливим завдяки вашій вірі в нашу місію.
             </p>
              <p className="font-roboto text-base font-normal text-gray-700 mb-6 leading-relaxed">
               Але ми не зупиняємося на досягнутому! У планах на другу половину 2025 року – організувати ще більше заходів, залучити нових волонтерів і розширити наш притулок, щоб допомогти ще більшій кількості тварин. Дізнайтесь, як ми досягли цього результату, і долучайтесь до нашої команди, щоб разом продовжувати змінювати життя безпритульних тварин на краще.
             </p>
             {/* Кнопки адаптивні */}
             <div className="flex flex-col sm:flex-row gap-4 mt-4">
               <button className="px-6 py-3 border border-gray-800 text-gray-800 rounded-full font-roboto font-medium hover:bg-gray-100 transition-colors">
                 Дізнатися більше
               </button>
               <button className="px-6 py-3 bg-gray-800 text-white rounded-full font-roboto font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                 Підтримати тваринок <span role="img" aria-label="paw">🐾</span>
               </button>
             </div>
          </div>

          {/* Права колонка: Картинка (Друга на моб, друга на LG) */}
          {/* mt-8 для відступу зверху на моб, lg:mt-0 скидає відступ */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2 lg:order-2">
            {/* ВАЖЛИВО: Переконайтесь, що шлях до зображення правильний відносно вашої структури проекту */}
            <img
              src="/pexels-nord6-7324407.jpg" // Шлях має бути доступним з папки public або оброблений збіркою
              alt="Група цуценят дивляться з машини"
              className="w-full h-auto max-h-[640px] object-cover rounded-lg shadow-md"
            />
          </div>

        </div>
      </div>
      {/* --- Кінець НОВОГО СЕГМЕНТУ 3 --- */}
{/* --- НОВИЙ СЕГМЕНТ 4: Галерея --- */}
<div className="w-full bg-white py-[112px] px-[64px]">
  <div className="max-w-[1440px] mx-auto">
    {/* Заголовок галереї */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-black">Галерея</h2>
      <p className="text-lg text-black mt-2">Найцiкавiшi моменти разом з улюбленцями!</p>
    </div>
    {/* Сітка зображень */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Велике зображення зверху */}
      <div className="md:col-span-2">
        <img
          src="public/pexels-cartier-1198802.jpg"
          alt="Білий собака на траві з квітучою вишнею"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      {/* Два менших зображення знизу */}
      <div>
        <img
          src="public/pexels-bruno-mattos-2148523065-30206143.jpg"
          alt="Сірий кіт грається з іграшкою"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      <div>
        <img
          src="public/pexels-fox-58267-1124925.jpg"
          alt="Таббі кіт відпочиває на лежанці"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</div>
{/* --- Кінець НОВОГО СЕГМЕНТУ 4 --- */}
    </div>
  );
};

export default NewsPage;