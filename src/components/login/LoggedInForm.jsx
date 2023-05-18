import React from "react";
import LoadingScreen from "../loading/loading";

function LoggedInForm({ isLoading, handlelogout }) {
  return (
    <div className="Auth-form-container">
      {isLoading && <LoadingScreen />}
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

export default LoggedInForm;