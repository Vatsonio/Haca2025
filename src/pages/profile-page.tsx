import { useEffect, useState } from 'react';
import { updateUser } from '@/api';
import { FieldComponent } from '@/components';
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
} from '@/lib/local-storage';
import { RoleType, User } from '@/types';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    role: 'Волонтер' as RoleType,
    description: '',
    email: '',
    password: '',
    imageUrl: '', // нове поле
  });

  useEffect(() => {
    const storedUser: User = getUserFromLocalStorage();
    console.log('Stored user:', storedUser);
    if (storedUser) {
      setUser(storedUser);
      setFormData({
        fullName: storedUser.fullName || '',
        role: storedUser.role || '',
        description: storedUser.description || '',
        email: storedUser.email || '',
        password: storedUser.password || '',
        imageUrl: storedUser.imageUrl || '', // нове поле
      });
    }
  }, []);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!user) {
      console.error('Користувача не знайдено');
      return;
    }

    toast(t => (
      <div className="flex flex-col items-start gap-3">
        <p className="text-lg text-black">Підтвердити збереження змін?</p>
        <div className="flex mx-auto gap-4 self-end">
          <Button
            size="lg"
            variant="outline"
            className="border border-black text-black hover:bg-black hover:text-white transition"
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                const updatedUser: User = {
                  ...user,
                  ...formData,
                  updatedAt: new Date().toISOString(),
                };

                const updatedUserFromServer = await updateUser(
                  user.id,
                  updatedUser
                );

                removeUserFromLocalStorage();
                saveUserToLocalStorage(updatedUserFromServer);
                setUser(updatedUserFromServer);

                toast.success('Зміни успішно збережено!');
                console.log('Користувач успішно оновлений');
              } catch (error) {
                console.error('Помилка під час оновлення користувача:', error);
                toast.error('Помилка під час збереження змін');
              }
            }}
          >
            Підтвердити
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-black hover:underline"
            onClick={() => toast.dismiss(t.id)}
          >
            Відмінити
          </Button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4 mt-10 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Профіль</h2>

      {formData.imageUrl && (
        <div className="flex flex-col items-start gap-2">
          <img
            src={formData.imageUrl}
            alt="Аватарка"
            className="w-24 h-24 object-cover rounded-full border border-gray-300"
          />
        </div>
      )}

      <FieldComponent
        label="Ім'я та прізвище"
        value={formData.fullName}
        onSave={value => handleChange('fullName', value)}
      />

      <hr className="my-4" />

      <FieldComponent
        label="Роль"
        value={formData.role}
        type="list"
        onSave={value => handleChange('role', value)}
        isEditable={false}
      />

      <hr className="my-4" />

      <FieldComponent
        label="Опис"
        value={formData.description}
        onSave={value => handleChange('description', value)}
      />

      <hr className="my-4" />

      <FieldComponent
        label="Email"
        value={formData.email}
        onSave={value => handleChange('email', value)}
      />

      <hr className="my-4" />

      <FieldComponent
        label="Пароль"
        value={formData.password}
        onSave={value => handleChange('password', value)}
        type="password"
      />

      <hr className="my-4" />

      <FieldComponent
        label="Фото (URL)"
        value={formData.imageUrl}
        onSave={value => handleChange('imageUrl', value)}
      />

      <hr className="my-4" />

      <button
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        onClick={handleSave}
      >
        Зберегти зміни
      </button>
      <button
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition ml-4"
        onClick={() => window.location.href = '/volunteer-profile'}
      >
        Переглянути профіль
      </button>

      <div className="flex flex-row mx-4 justify-between items-center mt-10">
        <h3 className="text-lg font-bold">Підтвердити аккаунт</h3>
        <Button className="flex px-15 py-5 hover:cursor-pointer">
          <img
            src="/DiiaLogo.svg"
            alt="Diia Logo"
            className="w-6 h-6 mr-2 object-contain border-white border-1 rounded-lg"
          />
          Підпис
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
