import React, { useState, useContext } from "react";
import OrderService from "../../services/OrderService";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

function SendOrderForm({ cart, clearCart }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [postoffice, setPostoffice] = useState("");
  const { store } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please enter your name (ПІБ).");
      return;
    }

    if (phone === "") {
      alert("Please enter your phone number (Номер телефону).");
      return;
    }

    if (region === "") {
      alert("Please enter your region (Область).");
      return;
    }

    if (city === "") {
      alert("Please enter your city (Місто).");
      return;
    }

    if (postoffice === "") {
      alert("Please enter the post office (Відділення).");
      return;
    }

    await store.checkAuth();
    console.log(store.isAuthenticated)

    if(store.isAuthenticated === false){
        alert("Please authrise")
        return;
    }
    OrderService.createOrder(name, phone, region, city, postoffice, cart);

    clearCart();

    setName("");
    setPhone("");
    setRegion("");
    setCity("");
    setPostoffice("");
  };

  return (
    <div className="client--info">
      <h1 className="cart__title">ДАНІ</h1>
      <form onSubmit={handleSubmit}>
        <div className="client--info--field">
          <input
            type="text"
            className="client--info--data pib"
            placeholder="ПІБ"
            maxLength="20"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="client--info--field">
          <input
            type="number"
            className="client--info--data phone number--field"
            placeholder="Номер телефону"
            maxLength="20"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="client--info--field">
          <input
            type="text"
            className="client--info--data region"
            placeholder="Область"
            maxLength="20"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
        <div className="client--info--field">
          <input
            type="text"
            className="client--info--data city"
            placeholder="Місто"
            maxLength="20"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="client--info--field">
          <input
            type="number"
            className="client--info--data postoffice number--field"
            placeholder="Відділення"
            maxLength="20"
            value={postoffice}
            onChange={(e) => setPostoffice(e.target.value)}
          />
        </div>
        <button type="submit" className="cart__button order--button">
          Оформити замовлення
        </button>
      </form>
    </div>
  );
}

export default observer(SendOrderForm);
