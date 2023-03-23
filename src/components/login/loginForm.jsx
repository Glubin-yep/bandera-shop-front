import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
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
    // validate confirmation password
    if (event.target.value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSignUpClick = () => {
    setShowConfirmPassword(true);
  };

  const handleSubmit = (event) => {
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
    // handle form submission logic here, such as calling your login API
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      {openDialog && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              height: 350,
            }}
          >

            <form onSubmit={handleSubmit}
            style={{
              }}
              >
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <span>{emailError}</span>}
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && <span>{passwordError}</span>}
              </div>
              {showConfirmPassword ? (
                <div>
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  {confirmPasswordError && <span>{confirmPasswordError}</span>}
                </div>
              ) : (
                <button type="button" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              )}
              {showConfirmPassword && <button type="submit">Login</button>}
            </form>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <a href="/"> <button onClick={handleCloseDialog}>Close</button> </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
