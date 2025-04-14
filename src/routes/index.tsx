import { Layout, ProfileLayout } from '@/components';
import { HomePage, ProfilePage, SignInPage, SignUpPage, NewsPage } from '@/pages';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/announcement" element={<Layout />} />
        <Route path="/lotteries" element={<Layout />} />
        <Route path="/donates" element={<Layout />} />
        <Route path="/about" element={<Layout />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>404 Page...</h1>} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
    </>
  )
);

export default router;