import Footer from './components/Footer/Footer';
import MyHeader from './components/header/MyHeader';
import LoginForm from './components/login/loginForm';
import Main from './components/Main/Main';
import Admin from './components/admin/adminPage';
import ItemDetail from './components/itemDetail/itemDetail';
import Cart from './components/cart/Cart';
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import "./style.css";

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
            <Route path='/items/:category/:itemId' element={<ItemDetail />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default observer(App);
