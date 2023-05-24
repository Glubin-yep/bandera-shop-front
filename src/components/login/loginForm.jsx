import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { useNavigate } from "react-router-dom";
import LoggedInForm from "./LoggedInForm";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import "../../style.css";

function LoginForm() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [authMode, setAuthMode] = useState("signIn");
  const { store } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsLoading(true);
      await store.checkAuth();
      setIsLoading(false);
      console.log(store.isAuthenticated);
      if (store.isAuthenticated) {
        setAuthMode("logout");
      }
    };
    checkAuthentication();
  }, [store]);

  useEffect(() => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  }, [confirmPassword, password]);

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
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signIn" ? "signUp" : "signIn");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordError) {
      alert(passwordError.concat());
      return;
    }

    if (emailError) {
      alert(emailError.concat());
      return;
    }

    if (authMode === "signUp" && confirmPasswordError) {
      alert(confirmPasswordError.concat());
      return;
    }

    if (authMode === "signIn") {
      setIsLoading(true);
      await store.Login(email, password);
      setIsLoading(false);
      if (store.isAuthenticated) {
        navigate("/");
      }
    }

    if (authMode === "signUp") {
      setIsLoading(true);
      await store.registration(email, password);
      setIsLoading(false);
      if (store.isAuthenticated) {
        navigate("/email-confirmation");
      }
    }
  };

  const handlelogout = (event) => {
    store.logout();
  };

  if (authMode === "logout") {
    return (
      <LoggedInForm isLoading={isLoading} handlelogout={handlelogout} />
    );
  }

  if (authMode === "signIn") {
    return (
      <SignInForm
        isLoading={isLoading}
        changeAuthMode={changeAuthMode}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  if (authMode === "signUp") {
    return (
      <SignUpForm
        isLoading={isLoading}
        changeAuthMode={changeAuthMode}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        handleSubmit={handleSubmit}
      />
    );
  }
}

export default observer(LoginForm);
