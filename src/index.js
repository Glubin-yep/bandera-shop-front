import React from 'react';
import ReactDOM from 'react-dom/client';
import userStore from './store/userStore';
import { createContext } from 'react';
import App from './App';

export const Context = createContext({
  store: userStore,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ store: userStore }}>
    <App />
  </Context.Provider>
);
