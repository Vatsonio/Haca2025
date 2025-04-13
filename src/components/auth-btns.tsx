import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

interface AuthButtonsProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  className?: string;
}

const AuthButtons = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  className,
}: AuthButtonsProps) => {
  return (
    <div
      className={cn(
        `${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto`,
        className
      )}
    >
      <Button
        variant="outline"
        size="auth"
        className="border-black font-roboto w-full md:w-auto"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Link to="/register">Зареєструватись</Link>
      </Button>
      <Button
        variant="default"
        size="auth"
        className="bg-black text-white font-roboto w-full md:w-auto"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Link to="/login">Увійти</Link>
      </Button>
    </div>
  );
};

export default AuthButtons;
