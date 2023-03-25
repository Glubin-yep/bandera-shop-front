import React, { useState } from "react";
import "../../style.css";
import logo from "./logo.png";
import Cart from "./shopping-cart.png";
import User from "./user.png";

import LoginForm from "../login/loginForm";

function MyHeader() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" />
        <span className="name">
          Bandera<sub className="prefix">shop</sub>
        </span>
      </div>
      <div className="header-right">
        <ul className="nav-list">
          <li>
            <a href="/#topCloth">Верхній одяг</a>
          </li>
          <li>
            <a href="/#trousers">Штани</a>
          </li>
          <li>
            <a href="/#shoes">Взуття</a>
          </li>
          <li>
            <a href="/#accessories">Аксесуари</a>
          </li>
          <li>
            <a href="/#">
              <img src={Cart} alt="Cart" className="cart" />
            </a>
          </li>
          <li>
            <a href="/auth">
              {" "}
              <img src={User} alt="User" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyHeader;
