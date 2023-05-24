import React, { useState, useEffect } from "react";
import ItemsService from "../../services/ItemsService";
import "../../style.css";
import logo from "./logo.png";
import Cart from "./shopping-cart.png";
import User from "./user.png";

function MyHeader() {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const newData = await ItemsService.getAllProducts(); // Await the promise
    setData(newData.data);
  }

  useEffect(() => {
    if (data) {
      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredProducts);
    }
  }, [data, searchQuery]);

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
      <div className="header-middle">
        <div className="search--bar--container">
          <input
            className="search--bar"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={() => setIsSearchFocused(!isSearchFocused)}

            placeholder="Пошук..."
          />
        </div>
        <div className="product-window">
          {/* Render the filtered products */}
          {isSearchFocused && filteredData && (
            <ul>
              {filteredData.map((product) => (
                <li key={product._id} className="product-window-li">
                  <a
                    href={`/items/${product.category}/${product._id}`}
                    key={product._id}
                    className="product-window-a"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
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
              <img src={User} alt="User" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyHeader;
