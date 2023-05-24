import React, { useState } from "react";
import "../../../style.css";
import ItemsService from "../../../services/ItemsService";

const AddProductForm = ({ onCancel }) => {
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [availableSizes, setAvailableSizes] = useState([]);
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [selectedValue, setSelectedValue] = useState("outerwears");

  function handleSelectChange(event) {
    setSelectedValue(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      shortDescription,
      fullDescription,
      availableSizes,
      price,
      photo,
      category: selectedValue,
    };

    ItemsService.addProduct(productData);
    console.log("Product added successfully!");
    // reset form fields
    setName("");
    setShortDescription("");
    setFullDescription("");
    setAvailableSizes([]);
    setPrice("");
    setPhoto("");
  };

  return (
    <form className="form--admin" onSubmit={handleSubmit}>
      <label className="label--admin">
        Category:
        <select
          className="admin--select"
          name="select"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="outerwears"> outerwears </option>
          <option value="underwear" selected>
            {" "}
            underwear{" "}
          </option>
          <option value="footwear">footwear</option>
          <option value="accessory">accessory</option>
        </select>
      </label>

      <label className="label--admin">
        Name:
        <input
          className="input--admin"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="label--admin">
        Short Description:
        <input
          className="input--admin"
          type="text"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </label>
      <label className="label--admin">
        Full Description:
        <textarea
          className="textarea--admin"
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
        />
      </label>
      <label className="label--admin">
        Sizes:
        <input
          className="input--admin"
          type="text"
          value={availableSizes}
          onChange={(e) => setAvailableSizes(e.target.value.split(","))}
        />
      </label>
      <label className="label--admin">
        Price:
        <input
          className="input--admin"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label className="label--admin">
        Image:
        <input
          className="input--admin"
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </label>
      <div className="add--product--buttons">
        <button className="admin--add--button" type="submit">Додати товар</button>
        <button className="admin--close--button" onClick={onCancel}>Закрити</button>
      </div>
      </form>
  );
};

export default AddProductForm;
