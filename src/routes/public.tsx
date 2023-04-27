import { Home } from '@/features/home/home';
import { Landing } from '@/features/misc';
import { lazyImport } from '@/utils/lazyImport';

// const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');

export const publicRoutes = [
  {
    path: '/',
    element: <Landing />,
    children: [
      // { path: '/discussions/*', element: <DiscussionsRoutes /> },
      // { path: '/users', element: <Users /> },
      // { path: '/profile', element: <Profile /> },
      { path: '/', element: <Home /> },
      // { path: '*', element: <Navigate to="." /> },
    ],
  },
];