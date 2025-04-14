import React from "react";
import { Footer, NavBar } from '@/components';

const VolunteerProfilePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Background Banner */}
      <div
        className="w-full h-48 md:h-72 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/background.png')", // Шлях до background.png
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        {/* Optional overlay for darkening the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Avatar positioned on the background */}
        <div className="absolute inset-x-0 bottom-[-48px] flex justify-center">
          <img
            src="/avatar.png" // Шлях до avatar.png
            alt="Volunteer Avatar"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Content (profile info, buttons etc.) */}
      <div className="max-w-4xl mx-auto px-4 py-16 font-sans text-center relative z-10">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <h1 className="text-2xl font-bold">Ім’я Прізвище</h1>
          <p className="text-sm text-gray-600 max-w-xl">
            Привіт! Мене звати [Ім’я], я волонтер із [місто/регіон]. Допомагаю людям, які постраждали від війни...
          </p>
          <p className="text-sm text-gray-500">📍 [Місто, країна, наприклад, Київ, Україна]</p>
        </div>

        {/* Categories */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4">Категорії</h2>
          <div className="flex flex-col gap-3 items-center">
            <button className="border-1 border-black rounded-[20px] px-7 py-3 text-sm hover:bg-gray-100">
              Доставка продуктів для нужденних: [посилання на статтю/проєкт]
            </button>
            <button className="border-1 border-black rounded-[20px] px-7 py-3 text-sm hover:bg-gray-100">
              Збір коштів на медичне обладнання: [посилання на кампанію]
            </button>
            <button className="border-1 border-black rounded-[20px] px-7 py-3 text-sm hover:bg-gray-100">
              Організація евакуації: [посилання на звіт/проєкт]
            </button>
          </div>
        </div>

        {/* Animal Help */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4">Допомога тваринам</h2>
          <div className="flex flex-col gap-3 items-center">
            <button className="border-1 border-black rounded-[20px] px-7 py-3 text-sm hover:bg-gray-100">
              Притулок для бездомних тварин: [посилання на сторінку притулку]
            </button>
            <button className="border-1 border-black rounded-[20px] px-6 py-3 text-sm hover:bg-gray-100">
              Збір кормів для тварин у зоні бойових дій: [посилання на ініціативу]
            </button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-1 border-black p-3 rounded-[20px] max-w-xl mx-auto">
          <h3 className="text-base font-semibold mb-2">Приєднуйтесь до нашої розсилки</h3>
          <p className="text-sm text-gray-600 mb-4">
            Підпишись на мої ініціативи! Підпишись на розсилку, щоб отримувати новини про мої волонтерські проєкти та дізнаватися, як ти можеш допомогти.
          </p>
          <input
            type="email"
            placeholder="Ваша електронна пошта"
            className="w-full px-4 py-2 border rounded-[20px] mb-2 text-sm"
          />
          <button className="bg-black text-white px-6 py-2 rounded-[20px] text-sm">
            Підписатися
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default VolunteerProfilePage;