import './App.css';
import Footer from './components/Footer/Footer';
import MyHeader from './components/header/MyHeader';
import LoginForm from './components/login/loginForm';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { observer } from 'mobx-react-lite';
import { createContext, useContext, useEffect } from 'react';
import { Context } from './index';

function App() {
  return (

    <div className="App">
      <MyHeader />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/auth" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>

  );
}

export default observer(App);
