import { Outlet } from 'react-router';
import { Footer, NavBar } from '@/components';

const Layout = () => {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
