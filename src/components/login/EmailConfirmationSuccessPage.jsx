import React from "react";
import { useNavigate } from "react-router-dom";
import '../../style.css'

function EmailConfirmationSuccessPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/"); 
  };

  return (
    <div className="email--confirm">
      <h3 className="email--confirm--title">Підтвердження паролю успішне</h3>
      <p className="email--confirm--text">Ваш пароль був успішно підтверджений.</p>
      <button className="email--confirm--button" onClick={handleContinue}>Продовжити</button>
    </div>
  );
}

export default EmailConfirmationSuccessPage;
