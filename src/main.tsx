import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';

import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';

import App from './App';
import theme from './theme';

const { ToastContainer } = createStandaloneToast();

/* 
  to use toast outside components, 
  const { toast } = createStandaloneToast(); 
*/

const AppWrapper = () => (
  <>
    <ToastContainer />
    <Provider store={store}>
      <MainApp />
    </Provider>
  </>
);

const MainApp = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppWrapper />
);
