import { User } from '@/types';
import { Bell, ChevronDown, User as UserIcon, LogOut } from 'lucide-react';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { removeUserFromLocalStorage } from '@/lib/local-storage';
import { Link } from 'react-router';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface ProfileBtnProps {
  user: User;
  isMobileMenuOpen: boolean;
  className?: string;
}

const ProfileBtn = ({ user, isMobileMenuOpen, className }: ProfileBtnProps) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const toggleAboutMenu = () => setIsAboutOpen(!isAboutOpen);

  const logout = () => {
    removeUserFromLocalStorage();
    window.location.reload();
  };

  return (
    <div
      className={cn(
        `${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto`,
        className
      )}
    >
      <div className="flex items-center gap-5">
        <Bell className="hidden md:block" />

        <div className="flex flex-col md:flex-row w-full md:w-auto items-center gap-2">
          <button
            className="md:hidden w-full flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100"
            onClick={toggleAboutMenu}
          >
            <Avatar className="mr-2">
              <AvatarImage
                src={
                  user.imageUrl || 'https://avatar.iran.liara.run/public/boy'
                }
              />
            </Avatar>
            <span className="font-roboto font-normal underline">
              {user.fullName}
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isAboutOpen && (
            <div className="md:hidden flex flex-col space-y-2 mt-2">
              <Button
                variant={'ghost'}
                className="w-full text-left hover:bg-gray-100"
              >
                <Link to={'/profile/profile'} className="flex flex-row m-2">
                  <UserIcon className="mr-2" />
                  Мій кабінет
                </Link>
              </Button>
              <Button
                variant={'outline'}
                size={'lg'}
                className="border-black hover:bg-gray-100 w-full"
                onClick={logout}
              >
                <LogOut className="mr-2" />
                Вийти
              </Button>
            </div>
          )}

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md gap-1">
                  <Avatar className="mr-2">
                    <AvatarImage
                      src={
                        user.imageUrl ||
                        'https://avatar.iran.liara.run/public/boy'
                      }
                    />
                  </Avatar>
                  {user.fullName}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col w-[250px] gap-2">
                  <Button
                    variant={'ghost'}
                    className="w-full text-left hover:bg-gray-100"
                  >
                    <Link to={'/profile/profile'} className="flex flex-row m-2">
                      <UserIcon className="mr-2" />
                      Мій кабінет
                    </Link>
                  </Button>
                  <Button
                    variant={'outline'}
                    size={'lg'}
                    className="border-black hover:bg-gray-100 w-full"
                    onClick={logout}
                  >
                    <LogOut className="mr-2" />
                    Вийти
                  </Button>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default ProfileBtn;
