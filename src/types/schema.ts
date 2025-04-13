import { z } from 'zod';

export const signInSchema = z.object({
    email: z.string().email({ message: "Неправильний формат електронної пошти" }),
    password: z.string().min(8, { message: "Пароль повинен містити принаймні 8 символів" }),
});

export const signUpSchema = z.object({
    fullName: z.string().min(1, { message: "Ім'я обов'язкове" }),
    email: z.string().email({ message: "Неправильний формат електронної пошти" }),
    password: z.string().min(8, { message: "Пароль повинен містити принаймні 8 символів" }),
    role: z.enum(['Волонтер', 'Притулок'], { required_error: "Виберіть роль" }),
})