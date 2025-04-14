import React, { useState, useEffect } from 'react';

const AboutCompany: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-04-26T00:00:00');
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const headerTitleStyle: React.CSSProperties = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const headerTextStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#666',
    marginBottom: '40px',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const developerCardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const developerAvatarStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    backgroundColor: '#e0e0e0',
    borderRadius: '50%',
  };

  const developerNameStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const developerPositionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#666',
  };

  const hackathonButtonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
  };

  const statsNumberStyle: React.CSSProperties = {
    fontSize: '36px',
    fontWeight: 'bold',
  };

  const statsLabelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#666',
  };

  const portfolioTitleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const portfolioTextStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto p-8 md:p-[112px_20px] text-center">
        <h1 style={headerTitleStyle}>
          Ми, DivassTeam, розробляємо ІТ-рішення, щоб полегшувати життя людей.
        </h1>
        <p style={headerTextStyle}>
          Наша мета — створювати продукти, які допомагають волонтерам і громадам
          працювати ефективніше.
        </p>
      </section>

      {/* Розробники */}
      <section className="max-w-5xl mx-auto p-8 md:p-[112px_20px] text-center">
        <h2 style={sectionTitleStyle}>DEVELOPERS</h2>
        <p style={headerTextStyle}>
          "Ми створили цей сайт із великою любов'ю до тварин і вірою в те, що
          кожен пухнастий друг заслуговує на дім. Наша команда працювала над
          тим, щоб зробити платформу зручною та корисною для всіх, хто хоче
          допомогти тваринам. Разом ми можемо зробити світ добрішим — для тварин
          і для людей!"
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8">
          {[
            {
              name: 'Лінчевський Ігор',
              position: 'Fullstack',
              avatar: '/public/ava2.jpg',
            },
            {
              name: 'Ільєв Ілля',
              position: 'UI/UX Designer',
              avatar: '/public/ava3.jpg',
            },
            {
              name: 'Бушак Євген',
              position: 'Front',
              avatar: '/public/ava4.jpg',
            },
            {
              name: 'Душинський Даніїл',
              position: 'Teamlid',
              avatar: '/public/ava1.jpg',
            },
            {
              name: 'Андрій',
              position: 'Ideas',
              avatar: '/avatars/developer5.jpg',
            },
          ].map((developer, index) => (
            <div key={index} style={developerCardStyle}>
              <div style={developerAvatarStyle}>
                {developer.avatar && (
                  <img
                    src={developer.avatar}
                    alt={developer.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={e => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
              <p style={developerNameStyle}>{developer.name}</p>
              <p style={developerPositionStyle}>
                {developer.position}, DivassTeam
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Хакатон з таймером */}
      <section className="max-w-5xl mx-auto p-8 md:p-[112px_20px] flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 style={sectionTitleStyle}>BEST::HACKath0n</h2>
          <p style={headerTextStyle}>
            Hackathon — це захід, на який збираються розробники, дизайнери,
            інженери, щоб за обмежений час в режимі інтенсиву та командної
            роботи створити та презентувати свій проєкт.
          </p>
          <a style={hackathonButtonStyle} href="https://hack.best-lviv.org.ua/">
            Перейти на сайт змагання
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex gap-4">
            {[
              { value: timeLeft.days, label: 'Днів' },
              { value: timeLeft.hours, label: 'Годин' },
              { value: timeLeft.minutes, label: 'Хвилин' },
              { value: timeLeft.seconds, label: 'Секунд' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p style={statsNumberStyle}>{stat.value}</p>
                <p style={statsLabelStyle}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-8 md:p-[112px_20px]">
        {/* Title at the top */}
        <h2 style={sectionTitleStyle} className="text-center">
          Попередній проєкт
        </h2>

        {/* Image container */}
        <div className="w-full h-full bg-gray-200 rounded-lg my-8">
          <img
            src="/public/divassmap.png"
            alt="Divass Help Map"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Project name and tags */}
          <div className="md:w-1/3">
            <h3 style={portfolioTitleStyle}>Divass Help Map</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                Divass Help Map
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                GitHub
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                About Us
              </span>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="md:w-2/3">
            <p style={portfolioTextStyle}>
              Divass Help Map — це інтерактивна карта, створена для того, щоб
              люди могли швидко знайти найближчі місця, де надають допомогу: від
              притулків для тварин до благодійних організацій. Наша команда
              розробила цей проєкт, щоб об'єднати тих, хто потребує підтримки, з
              тими, хто готовий її надати, у зручному та доступному форматі.
            </p>
          </div>
        </div>

        {/* View All button */}
        <div className="mt-8 text-center">
          <a
            style={hackathonButtonStyle}
            href="https://github.com/Vatsonio/Divass_Help_Map"
          >
            Переглянути все
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;
