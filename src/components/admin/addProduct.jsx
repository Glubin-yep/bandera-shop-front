import React, { useState } from "react";
import './styles.css'

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [sizes, setSizes] = useState([]);
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  function handleSelectChange(event) {
    setSelectedValue(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const productData = {
      name,
      shortDescription,
      fullDescription,
      sizes,
      price,
      photo,
      category: selectedValue
    };
  
    try {
      const response = await fetch("http://localhost:4000/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productData)
      });
  
      if (!response.ok) {
        throw new Error(
          `Failed to add product: ${response.status} ${response.statusText}`
        );
      }
  
      console.log("Product added successfully!");
      // reset form fields
      setName("");
      setShortDescription("");
      setFullDescription("");
      setSizes([]);
      setPrice("");
      setPhoto("");
    } catch (err) {
      console.log(`Error adding product: ${err.message}`);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Category:
      <select name="select" value={selectedValue} onChange={handleSelectChange}>
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
          value={sizes}
          onChange={(e) => setSizes(e.target.value.split(","))}
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
        <input type="text"
         value={photo}
         onChange={(e) => setPhoto(e.target.value)}/>
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
