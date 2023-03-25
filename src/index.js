import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/userStore';
import { createContext} from 'react';
import './index.css';
import App from './App';

export const Context = createContext({
    store,
})

const Root = () => {
    useEffect(() => {
      document.cookie = 'cookieName=refreshToken; SameSite=None; Secure';
    }, []);
  
    return (
      <Context.Provider value={{ store }}>
        <App />
      </Context.Provider>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(<Root />);