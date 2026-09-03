import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProviderWrapper } from './context/ThemeContext';
import { persistor } from './store';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routs from './routes/Routs';
import './styles/index.css'; // Novo CSS de reset global

function App() {
  return (
    <ThemeProviderWrapper>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Header />
            <Routs />
            <GlobalStyles />
            <ToastContainer
              autoClose={3000}
              className='toast-container'
              style={{
                position: 'top-right',
                zIndex: 10000,
              }}
            />
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProviderWrapper>
  );
}

export default App;