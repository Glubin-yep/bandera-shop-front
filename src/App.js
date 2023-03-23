import './App.css';
import Footer from './components/Footer/Footer';
import MyHeader from './components/header/MyHeader';
import LoginForm from './components/login/loginForm';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <MyHeader/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
