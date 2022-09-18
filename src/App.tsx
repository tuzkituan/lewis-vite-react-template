import { useLocation, useNavigate } from 'react-router-dom';
import Routes from 'routes';
import history from 'utils/history';

import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div>
      <Routes />
      <ThemeToggleButton position="fixed" bottom={7} right={7} />
    </div>
  );
};

export default App;
