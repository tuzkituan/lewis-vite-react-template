import Home from 'pages/Home';
import { useRoutes } from 'react-router-dom';

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
