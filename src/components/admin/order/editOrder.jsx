import React, { useState, useEffect } from "react";
import "../../../style.css";
import OrderService from "../../../services/OrderService";

const EditOrderForm = ({ order, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postoffice, setPostOffice] = useState("");
  const [region, setRegion] = useState([]);
  const [city, setCity] = useState(0);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [items, setItems] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    console.log(order);
    setName(order.name);
    setPhone(order.phone);
    setPostOffice(order.postoffice);
    setRegion(order.region);
    setCity(order.city);
    setStatus(order.status);
    setEmail(order.email);
    setItems(order.items);
    setId(order._id);
  }, [order]);

  const handleDelete = () => {
    OrderService.deleteOrderById({ id }).then(() => {
      onClose();
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    OrderService.updateOrders({
      id,
      name,
      phone,
      region,
      city,
      postoffice,
      items,
    }).then(() => {
      onClose();
    });
  };

  return (
    <form className="form--admin admin--form" onSubmit={handleSubmit}>
      <label className="admin--label">
        status
        <input
          className="admin--input"
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </label>
      <label className="admin--label">
        email
        <input
          className="admin--input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="admin--label">
        name
        <input className="admin--input" type="text" value={name} readOnly />
      </label>
      <label className="admin--label">
        Full Description:
        <input className="admin--input" value={phone} readOnly />
      </label>
      <label className="admin--label">
        Sizes:
        <input
          className="admin--input"
          type="text"
          value={postoffice}
          readOnly
        />
      </label>
      <label className="admin--label">
        Price:
        <input className="admin--input" type="number" value={region} readOnly />
      </label>
      <label className="admin--label">
        Image:
        <input className="admin--input" type="text" value={city} readOnly />
      </label>
      <label className="admin--label">
        Image:
        <input
          className="admin--input"
          type="text"
          value={items.length}
          readOnly
        />
      </label>
      <button type="submit" className="admin--button--save">
        Зберегти зміни
      </button>
      <button
        className="admin--button--delete"
        type="button"
        onClick={() => handleDelete()}
      >
        Видалити
      </button>
      <button className="admin--button--delete" onClick={onClose}>
        Закрити
      </button>
    </form>
  );
};

export default EditOrderForm;
