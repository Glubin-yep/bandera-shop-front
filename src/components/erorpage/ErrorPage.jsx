import React from "react";
import { useNavigate } from "react-router-dom";
import '../../style.css'

function ErrorPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <div className="email--confirm">
      <h2>Сторінка не знайдена</h2>
      <button className="email--confirm--button" onClick={handleContinue}>На Головну</button>
    </div>
  );
}

export default ErrorPage;
