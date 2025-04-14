import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signInSchema } from '@/types/schema';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import { loginUser } from '@/api';
import { saveUserToLocalStorage } from '@/lib/local-storage';
import { handleGoogleSignIn } from '@/api/firebase';

const SignInPage = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      const user = await loginUser(values.email, values.password);
      if (!user) {
        toast.error('Неправильна електронна пошта або пароль');
        return;
      }

      saveUserToLocalStorage(user);
      toast.success('Вхід успішний!');
      navigate('/');
    } catch (error) {
      console.error('Error during sign in:', error);
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
      console.error('Error during Google sign in:', error);
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
          <h1 className="text-5xl font-roboto font-bold text-center">Вхід</h1>
          <p className="text-lg font-roboto font-normal text-center mt-6">
            Ласкаво просимо до спільноти однодумців!
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full max-w-md mt-10"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Електронна пошта*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
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
                    <FormLabel>
                      <div className="flex flex-row justify-between items-center w-full">
                        <span>Пароль*</span>
                        <span className="underline font-roboto font-normal text-gray-400 hover:text-gray-700 hover:cursor-pointer">
                          Забули пароль?
                        </span>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="xy$z123aca"
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
              <Button
                size={'auth'}
                className="w-full font-roboto font-normal text-sm hover:cursor-pointer"
                type="submit"
              >
                Авторизуватися
              </Button>
              {form.formState.errors.root &&
                toast.error(form.formState.errors.root.message!, {
                  duration: 4000,
                })}
            </form>
          </Form>
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
            <span className="mr-2">Немає облікового запису?</span>
            <Link to="/register" className="underline">
              Зареєструватися
            </Link>
          </div>
        </div>
        <h1 className="font-roboto font-normal text-sm absolute bottom-4 left-15 hidden md:block">
          © 2025 Divass. Всі права захищені.
        </h1>
      </div>
      <div className="relative w-full md:w-1/2">
        <img
          src="/sign-in-img.png"
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

export default SignInPage;
