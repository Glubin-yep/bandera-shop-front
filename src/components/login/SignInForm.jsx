import React from "react";
import LoadingScreen from "../loading/loading";

function SignInForm({ isLoading, changeAuthMode, handleEmailChange, handlePasswordChange, handleSubmit }) {
  return (
    <div className="Auth-form-container">
      {isLoading && <LoadingScreen />}
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Вхід</h3>
          <hr className="sign--in--line" />
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
              maxLength="20"
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
            Забули{" "}
            <a href="/auth" className="forgot--password">
              пароль
            </a>
            ?
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
