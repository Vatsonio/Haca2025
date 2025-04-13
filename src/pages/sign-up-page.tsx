import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signUpSchema } from '@/types/schema';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import { User } from '@/types';
import { registerUser } from '@/api';
import { saveUserToLocalStorage } from '@/lib/local-storage';
import { handleGoogleSignIn } from '@/api/firebase';

const SignUpPage = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      role: 'Волонтер',
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    try {
      const user: Omit<User, 'id'> = {
        ...values,
        verified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const registeredUser = await registerUser(user);
      saveUserToLocalStorage(registeredUser);
      navigate('/');
      toast.success('Реєстрація успішна!');
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error(`${error}`);
    }
  };

  const handleGoogle = async () => {
    try {
      const isSuccess = await handleGoogleSignIn();
      if (isSuccess) {
        toast.success('Вхід через Google успішний!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error during Google sign up:', error);
      toast.error(`Error: ${error}`);
    }
  };

  return (
    <div className="mx-auto w-full flex flex-col md:flex-row">
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="font-satisfy text-4xl absolute top-4 left-15">
          <Link to="/">PAWS</Link>
        </h1>

        <div className="flex flex-col justify-center items-center w-full h-screen">
          <h1 className="text-5xl font-roboto font-bold text-center">
            Зареєструватися
          </h1>
          <p className="text-lg font-roboto font-normal text-center mt-6">
            Приєднайся до дружньої спільноти однодумців!
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full max-w-md mt-10"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Ім'я"
                        required
                        type="text"
                        className="border-1 border-black rounded-2xl h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Електронна пошта"
                        required
                        type="email"
                        className="border-1 border-black rounded-2xl h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Пароль"
                        required
                        type="password"
                        className="border-1 border-black rounded-2xl h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="border-1 border-black rounded-2xl w-full max-w-md">
                          <SelectValue placeholder="Виберіть роль" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Волонтер">Волонтер</SelectItem>
                          <SelectItem value="Притулок">Притулок</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                size={'auth'}
                className="w-full font-roboto font-normal text-sm hover:cursor-pointer"
                type="submit"
              >
                Зареєструватися
              </Button>
              {form.formState.errors.root &&
                toast.error(form.formState.errors.root.message!, {
                  duration: 4000,
                })}
            </form>
          </Form>

          <div className="border-black border-b-1 w-full max-w-md mt-5 mb-4" />
          <Button
            variant={'outline'}
            size={'auth'}
            onClick={handleGoogle}
            className="w-full max-w-md font-roboto font-normal text-sm my-4 border-black hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
            Увійти через Google
          </Button>

          <div className="flex flex-row justify-center items-center text-sm font-roboto font-normal">
            <span className="mr-2">Вже маєте акаунт?</span>
            <Link to="/login" className="underline">
              Увійти
            </Link>
          </div>
        </div>
        <h1 className="font-roboto font-normal text-sm absolute bottom-4 left-15 hidden md:block">
          © 2025 Divass. Всі права захищені.
        </h1>
      </div>
      <div className="relative w-full md:w-1/2">
        <img
          src="/sign-up-img.png"
          alt="Sign In"
          className="w-full h-100 md:h-screen object-cover"
        />
        {/* Копірайт для мобільної версії */}
        <h1 className="font-roboto font-normal text-sm absolute bottom-4 left-4 text-white md:hidden">
          © 2025 Divass. Всі права захищені.
        </h1>
      </div>
    </div>
  );
};

export default SignUpPage;
