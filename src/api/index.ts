import { User } from '@/types';
import bcrypt from 'bcryptjs';

const API_URL = 'http://localhost:3001';

export const registerUser = async (user: Omit<User, 'id'>): Promise<User> => {
  user.password = bcrypt.hashSync(user.password, 10);
  const registered = await fetch(`${API_URL}/users?email=${user.email}`);
  const registeredUsers = await registered.json();
  if (registeredUsers.length > 0) {
    throw new Error('Користувач з такою електронною поштою вже існує');
  }

  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return await res.json();
};

export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const res = await fetch(`${API_URL}/users?email=${email}`);
  const users = await res.json();
  if (users.length === 0 || !bcrypt.compareSync(password, users[0].password)) {
    throw new Error('Неправильна електронна пошта або пароль');
  }
  return users[0];
};

export const getUserById = async (userId: string): Promise<User> => {
  const res = await fetch(`${API_URL}/users/${userId}`);
  if (!res.ok) {
    throw new Error('Користувача не знайдено');
  }
  const user = await res.json();
  return user;
};

export const updateUser = async (userId: string, user: User): Promise<User> => {
  const userToUpdate = await getUserById(userId);
  if (!userToUpdate) {
    throw new Error('Користувача не знайдено');
  }

  const res = await fetch(`${API_URL}/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error('Не вдалося оновити користувача');
  }

  const updatedUser = await res.json();
  return updatedUser;
};
