import React from "react";
import "../../style.css";
import logo from "./logo.png";
import Cart from "./shopping-cart.png";
import User from "./user.png";

function MyHeader() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" />
        <a className="href--home" href="/">
        <span className="name">
          Bandera<sub className="prefix">shop</sub>
        </span>
        </a>
      </div>
      <div className="header-right">
        <ul className="nav-list">
          <div className="left--nav">
            <li>
            <a href="/#outerwears">Верхній одяг</a>
            </li>
            <li>
              <a href="/#underwear">Штани</a>
            </li>
            <li>
              <a href="/#footwear">Взуття</a>
            </li>
            <li>
              <a href="/#accessory">Аксесуари</a>
            </li>
          </div>
          <li>
            <a href="/cart">
              <img src={Cart} alt="Cart" className="cart-header" />
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
