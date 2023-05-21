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
      <h3 className="email--confirm--title">Email Confirmation Successful</h3>
      <p className="email--confirm--text">Your email has been successfully confirmed.</p>
      <button className="email--confirm--button" onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default EmailConfirmationSuccessPage;
