import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { User } from '@/types';
import { getUserFromLocalStorage } from '@/lib/local-storage';
import AuthButtons from './auth-btns';
import ProfileBtn from './profile-btn';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { isActive } from '@/lib/utils';

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    setUser(storedUser);
    setIsAuthenticated(!!storedUser);
  }, []);

  const linkClass = (path: string) =>
    isActive(path, location)
      ? 'font-bold bg-gray-100 rounded-md px-2 py-1'
      : 'hover:underline';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setIsAboutOpen(false);
  };

  const toggleAboutMenu = () => setIsAboutOpen(!isAboutOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5">
          <div className="flex flex-col md:flex-row justify-between w-full md:w-auto items-center">
            <div className="space-x-0 md:space-x-10 w-full md:w-auto">
              <div className="w-full flex justify-between mr-0 md:mr-10">
                <Link to="/" className="text-3xl font-satisfy">
                  PAWS
                </Link>
                <button className="md:hidden" onClick={toggleMobileMenu}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            <div
              className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
            >
              {[
                { to: '/news', text: 'Новини та блог' },
                { to: '/announcement', text: 'Всі оголошення' },
                { to: '/lotteries', text: 'Розіграші' },
                { to: '/donates', text: 'Сторінка донатів' },
              ].map(({ to, text }) => (
                <Link
                  key={to}
                  to={to}
                  className={`${linkClass(to)} w-full md:w-auto text-center`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {text}
                </Link>
              ))}
            </div>

            {/* Mobile: About dropdown */}
            <div className={isMobileMenuOpen ? 'flex flex-col' : 'hidden'}>
              <button
                className="md:hidden w-full flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100"
                onClick={toggleAboutMenu}
              >
                Про нас
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isAboutOpen && (
                <div className="md:hidden flex flex-col space-y-2 mt-2">
                  <Link
                    to="/about"
                    className="hover:underline text-center"
                    onClick={toggleMobileMenu}
                  >
                    Наша історія
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:underline text-center"
                    onClick={toggleMobileMenu}
                  >
                    Контакти
                  </Link>
                </div>
              )}

              {/* Desktop: About dropdown */}
              <NavigationMenu className="hidden md:block ml-0 md:ml-2">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="gap-1 font-normal text-md">
                      Про нас
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-[200px]">
                      <div className="flex flex-col gap-2 p-2">
                        <Link
                          to="/about"
                          className="hover:bg-gray-100 px-2 py-1 rounded-md"
                        >
                          Наша історія
                        </Link>
                        <Link
                          to="/contact"
                          className="hover:bg-gray-100 px-2 py-1 rounded-md"
                        >
                          Контакти
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>

        {isAuthenticated && user ? (
          <ProfileBtn user={user} isMobileMenuOpen={isMobileMenuOpen} />
        ) : (
          <AuthButtons
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
