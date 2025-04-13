import { getUserFromLocalStorage } from '@/lib/local-storage';
import { isActive } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';

const ProfileLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileCategory, setProfileCategory] = useState<string>('');

  const categories = [
    { path: 'your-announcements', label: 'Ваші оголошення' },
    { path: 'favourites', label: 'Обрані' },
    { path: 'profile', label: 'Профіль' },
    { path: 'incoming-request', label: 'Вхідні заявки' },
    { path: 'my-request', label: 'Мої заявки' },
    { path: 'accepted-request', label: 'Прийняті заявки' },
  ];

  const linkClass = (path: string) =>
    isActive(path, location) && 'font-bold underline';

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (!storedUser) {
      navigate('/login');
    }

    const pathSegments = location.pathname.split('/');
    const category = pathSegments[pathSegments.length - 1];
    if (categories.some(cat => cat.path === category)) {
      setProfileCategory(
        categories.find(cat => cat.path === category)?.label || ''
      );
    } else {
      setProfileCategory('');
    }
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{profileCategory}</h1>
        <div className="w-full flex flex-wrap gap-10 ml-5 mt-5">
          {categories.map(({ path, label }) => (
            <Link
              key={path}
              to={`/profile/${path}`}
              className={`${linkClass('/profile/' + path)} w-/1/2 md:w-auto text-center text-lg hover:scale-110 duration-300 transition-transform ease-in-out`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
