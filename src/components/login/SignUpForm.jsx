import React from "react";
import LoadingScreen from "../loading/loading";

function SignUpForm({ isLoading, changeAuthMode, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange, handleSubmit }) {
  return (
    <div className="Auth-form-container">
      {isLoading && <LoadingScreen />}
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

export default SignUpForm;
