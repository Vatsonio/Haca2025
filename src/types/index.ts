export type NewsType = {
  title: string;
  description: string;
  imageUrl: string;
  authorName: string;
  authorImageUrl: string;
  publishedAt: string;
};

export type FaqType = {
  question: string;
  answer: string;
};

export type CategoryType = {
  label: string;
  value: string;
};

export type RoleType = 'Волонтер' | 'Притулок';

export type User = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  role: RoleType;
  description?: string;
  imageUrl?: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Animal = {
  id: string;
  name: string;
  type:
    | 'Кіт'
    | 'Собака'
    | 'Папуга'
    | 'Кролик'
    | 'Щур'
    | 'Морська свинка'
    | 'Хомяк'
    | 'Інше';
  reason: 'Переїзд' | 'Алергія' | 'Фінансові труднощі' | 'Інше';
  age: number;
  sex: 'Хлопчик' | 'Дівчинка';
  breed: string;
  sterilized: boolean;
  vaccination: 'Всі необхідні' | 'Частково' | 'Ні';
  microchipped: boolean;
  passport: boolean;
  description?: string;
  imageUrl?: string[];
  location: string;
};

export type Announcement = {
  id: string;
  title: string;
  description: string;
  userId: string;
  animalId: string;
  createdAt: string;
  updatedAt: string;
};
