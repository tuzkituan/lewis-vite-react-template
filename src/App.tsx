import ThemeToggleButton from 'components/ThemeToggleButton';
import Routes from 'routes';

function App() {
  return (
    <div>
      <Routes />
      <ThemeToggleButton position="fixed" bottom={7} right={7} />
    </div>
  );
}

export default App;
