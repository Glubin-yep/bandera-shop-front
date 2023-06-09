import Footer from './components/Footer/Footer';
import MyHeader from './components/header/MyHeader';
import LoginForm from './components/login/loginForm';
import Main from './components/Main/Main';
import Admin from './components/admin/adminPage';
import ItemDetail from './components/itemDetail/itemDetail';
import EmailConfirmationPage from './components/login/EmailConfirmationPage';
import EmailConfirmationSuccessPage from './components/login/EmailConfirmationSuccessPage';
import Cart from './components/cart/Cart';
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import "./style.css";
import ErrorPage from './components/erorpage/ErrorPage';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <MyHeader />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/auth" element={<LoginForm />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/email-confirmation' element={<EmailConfirmationPage />}/>
            <Route path='/email-confirmation-success' element={<EmailConfirmationSuccessPage />}/>
            <Route path='/items/:category/:itemId' element={<ItemDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default observer(App);
