import './App.css';
import Footer from './components/Footer/Footer';
import MyHeader from './components/header/MyHeader';
import LoginForm from './components/login/loginForm';
import Main from './components/Main/Main';
import Admin from './components/admin/adminPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { observer } from 'mobx-react-lite';

function App() {
  return (

    <div className="App">
      <MyHeader />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/auth" element={<LoginForm />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>

  );
}

export default observer(App);
