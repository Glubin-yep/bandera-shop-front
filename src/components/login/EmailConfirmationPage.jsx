import React from "react";
import '../../style.css'

function EmailConfirmationPage() { 
  return (
    <div className="email--confirm">
      <h3 className="email--confirm--title">Підтвердження паролю</h3>
      <p className="email--confirm--text">Будь ласка підтвердіть емайл, щоб продовжити.</p>
    </div>
  );
}

export default EmailConfirmationPage;
