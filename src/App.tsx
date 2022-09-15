import Routes from '@/routes';

import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  return (
    <div>
      <Routes />
      <ThemeToggleButton position="fixed" bottom={7} right={7} />
    </div>
  );
}

export default App;
