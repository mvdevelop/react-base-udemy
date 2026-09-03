import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProviderWrapper } from './context/ThemeContext';
import store, { persistor } from './store';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Routs from './routes/Routs';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProviderWrapper>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
              <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
              <Header />
              <main id="main-content">
                <Routs />
              </main>
              <Footer />
              <GlobalStyle />
              <ToastContainer
                autoClose={3000}
                className='toast-container'
                position="top-right"
              />
            </Router>
          </PersistGate>
        </Provider>
      </ThemeProviderWrapper>
    </ErrorBoundary>
  );
}

export default App;