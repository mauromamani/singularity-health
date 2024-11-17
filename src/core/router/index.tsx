import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/layout';
import ProtectedRoute from './protected-route';
import PublicRoute from './public-route';

//  Page Components
const Home = lazy(() => import('@/modules/home/page'));
const Login = lazy(() => import('@/modules/auth/page'));

const NotFound = lazy(() => import('@/modules/feedback/404'));

const SuspenseComponent = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Cargando...</div>}>{children}</Suspense>;
};

// Configuración del enrutador
const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicRoute>
        <SuspenseComponent>
          <Login />
        </SuspenseComponent>
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: (
          <SuspenseComponent>
            <Home />
          </SuspenseComponent>
        ),
      },
      {
        path: '/location',
        element: (
          <SuspenseComponent>
            <Home />
          </SuspenseComponent>
        ),
      },
      {
        path: '/blog',
        element: (
          <SuspenseComponent>
            <Home />
          </SuspenseComponent>
        ),
      },
      {
        path: '/services',
        element: (
          <SuspenseComponent>
            <Home />
          </SuspenseComponent>
        ),
      },
      {
        path: '/about-us',
        element: (
          <SuspenseComponent>
            <Home />
          </SuspenseComponent>
        ),
      },
      {
        path: '/franchise-with-us',
        element: (
          <SuspenseComponent>
            <Home />
          </SuspenseComponent>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <SuspenseComponent>
        <NotFound />
      </SuspenseComponent>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
