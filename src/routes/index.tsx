import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { useRoutes } from 'react-router-dom';

const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <div />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

export default Routes;
