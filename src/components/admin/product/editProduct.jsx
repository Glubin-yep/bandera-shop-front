import React, { useState, useEffect } from "react";
import "../../../style.css";
import ItemsService from "../../../services/ItemsService";

const AddProductForm = ({ product, onClose }) => {
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [availableSizes, setAvailableSizes] = useState([]);
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    console.log(product)
    setName(product.name);
    setShortDescription(product.shortDescription);
    setFullDescription(product.fullDescription);
    setAvailableSizes(product.availableSizes);
    setPrice(product.price);
    setPhoto(product.photo);
    setCategory(product.category);
    setId(product._id);
  }, [product]);

  const handleDelete = () => {
    ItemsService.deleteProductById({
      category,
      id,
    }).then(() => {
        onClose();
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ItemsService.updateProduct({
      name,
      shortDescription,
      fullDescription,
      availableSizes,
      price,
      photo,
      category,
    }).then(() => {
        onClose();
    });
  };

  return (
    <form className="form--admin admin--form" onSubmit={handleSubmit}>
      <label className="admin--label">
        Short Description:
        <input
          className="admin--input"
          type="text"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </label>
      <label className="admin--label">
        Full Description:
        <textarea
          className="admin--input"
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
        />
      </label>
      <label className="admin--label">
        Sizes:
        <input
          className="admin--input"
          type="text"
          value={availableSizes}
          onChange={(e) => setAvailableSizes(e.target.value.split(","))}
        />
      </label>
      <label className="admin--label">
        Price:
        <input
          className="admin--input"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label className="admin--label">
        Image:
        <input
          className="admin--input"
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
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

export default AddProductForm;
