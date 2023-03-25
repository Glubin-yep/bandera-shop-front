import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/userStore';
import { createContext} from 'react';
import './index.css';
import App from './App';

export const Context = createContext({
    store,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
document.cookie = 'cookieName=refreshToken; SameSite=None; Secure';
root.render(
    <Context.Provider value={{ store }}>
        <App />
    </Context.Provider>
);
