import { observer } from "mobx-react-lite";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../index";
import { useNavigate } from "react-router-dom";
import "../../style.css";

function LoginForm() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [authMode, setAuthMode] = useState("signIn");
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      await store.checkAuth();
      console.log(store.isAuthenticated);
      if (store.isAuthenticated) {
        setAuthMode("logout");
      }
    };
    checkAuthentication();
  }, [store]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (!/^\S+@\S+\.\S+$/.test(event.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (event.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signIn" ? "sighUp" : "signIn");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordError) {
      alert(passwordError.concat());
      return;
    }

    if (emailError) {
      alert(emailError.concat());
      return;
    }

    if (confirmPasswordError) {
      alert(confirmPasswordError.concat());
      return;
    }

    if (authMode === "signIn") {
      await store.Login(email, password);
      navigate("/");
    }

    if (authMode === "sighUp") {
      await store.registration(email, password);
      navigate("/");
    }
  };

  const handlelogout = (event) => {
    store.logout();
  };

  if (authMode === "logout") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title log--out">Ви уже авторизовані</h3>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handlelogout}
              >
                ВИЙТИ
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  if (authMode === "signIn") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Ввійти</h3>
            <hr className="sign--in--line"/>
            <div className="text-center">
              Не зареєстровані?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Зареєструватися
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Електронна пошта</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Введіть пошту"
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Пароль</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Введіть пароль"
                maxlength="20"
                onChange={handlePasswordChange}
              />
              <p className="limit--charachter--text">Від 6 до 20 символів</p>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                ВХІД
              </button>
            </div>
            <p className="text-center mt-2">
              Забули <a href="/auth" className="forgot--password">пароль</a>?
            </p>
          </div>
        </form>
      </div>
    );
  }

  if (authMode === "sighUp") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Реєстрація</h3>
            <div className="text-center">
              Вже зареєстровані?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Ввійти
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Електронна пошта</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Введіть пошту"
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Пароль</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Введіть пароль"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Підтвердіть пароль</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Введіть пароль"
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Реєстрація
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default observer(LoginForm);
