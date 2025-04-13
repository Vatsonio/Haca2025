import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8 mt-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="flex items-center md:items-start text-4xl font-satisfy">
            PAWS
          </span>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-10 md:mt-0 font-roboto">
            <Link to="/news" className="hover:underline">
              Новини та блог
            </Link>
            <Link to="/announcement" className="hover:underline">
              Всі оголошення
            </Link>
            <Link to="/lotteries" className="hover:underline">
              Розіграші
            </Link>
            <Link to="/donates" className="hover:underline">
              Сторінка донатів
            </Link>
            <Link to="/about" className="hover:underline">
              Наша історія
            </Link>
            <Link to="/contact" className="hover:underline">
              Контакти
            </Link>
          </div>
          <div className="flex flex-row gap-4 mt-10 md:mt-0">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                className="text-gray-700 hover:text-gray-900"
              />
            </a>
            <a
              href="https://www.x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                size="xl"
                className="text-gray-700 hover:text-gray-900"
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className="text-gray-700 hover:text-gray-900"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="xl"
                className="text-gray-700 hover:text-gray-900"
              />
            </a>
          </div>
        </div>
        <div className="w-full border-b-2 border-gray-300 py-2 mt-20 mb-10" />

        <div className="flex flex-col md:flex-row items-center mx-auto gap-6 justify-center">
          <span className="text-gray-700 text-sm font-roboto order-last md:order-first">
            © 2025 Divass. Всі права захищені.
          </span>
          <span className="text-gray-700 text-sm font-roboto underline hover:text-gray-900 cursor-pointer">
            Політика конфіденційності
          </span>
          <span className="text-gray-700 text-sm font-roboto underline hover:text-gray-900 cursor-pointer">
            Умови обслуговування
          </span>
          <span className="text-gray-700 text-sm font-roboto underline hover:text-gray-900 cursor-pointer">
            Налаштування файлів cookie
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
