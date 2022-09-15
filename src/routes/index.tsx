import { useRoutes } from 'react-router-dom';

import Home from '@/pages/Home';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <div />,
    },
  ]);
}
