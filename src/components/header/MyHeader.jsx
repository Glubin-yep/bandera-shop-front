import React from "react";
import "./myHeader.css";
import logo from "./logo.png";
import Cart from "./shopping-cart.png";
import User from "./user.png";

function MyHeader() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" />
        <span className="name">Bandera</span>
        <span className="prefix">shop</span>
      </div>
      <div className="header-right">
        <ul className="nav-list">
          <li>
            <a href="/">Верхній одяг</a>
          </li>
          <li>
            <a href="/">Штани</a>
          </li>
          <li>
            <a href="/">Взуття</a>
          </li>
          <li>
            <a href="/">Аксесуари</a>
          </li>
          <li>
            <a href="/"><img src={Cart} alt="Cart" /></a>
          </li>
          <li>
          <a href="/"><img src={User} alt="User" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyHeader;
