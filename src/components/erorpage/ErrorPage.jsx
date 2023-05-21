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
      <h1>The page is not found</h1>
      <button className="email--confirm--button" onClick={handleContinue}>Go to Home</button>
    </div>
  );
}

export default ErrorPage;
