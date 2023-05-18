import React from "react";
import { useNavigate } from "react-router-dom";

function EmailConfirmationSuccessPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/"); 
  };

  return (
    <div>
      <h3>Email Confirmation Successful</h3>
      <p>Your email has been successfully confirmed.</p>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default EmailConfirmationSuccessPage;
