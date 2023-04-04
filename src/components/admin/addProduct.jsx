import React, { useState } from "react";
import "./styles.css";
import ItemsService from "../../services/ItemsService";

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
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <select
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

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Short Description:
        <input
          type="text"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </label>
      <label>
        Full Description:
        <textarea
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
        />
      </label>
      <label>
        Sizes:
        <input
          type="text"
          value={availableSizes}
          onChange={(e) => setAvailableSizes(e.target.value.split(","))}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Image:
        <input
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
