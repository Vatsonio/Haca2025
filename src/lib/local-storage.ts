import { User } from "@/types";

const USER_KEY = 'user';

export const saveUserToLocalStorage = (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export const getUserFromLocalStorage = () => {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem(USER_KEY);
}