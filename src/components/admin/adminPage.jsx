import { useState, useEffect } from "react";
import AddProduct from "./addProduct";
import ItemsService from "../../services/ItemsService";
import LoadingScreen from "../loading/loading";
import "../../style.css";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [availableSizes, setAvailableSizes] = useState([]);
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [, setShowForm] = useState(false);  
  const [isLoading, setIsLoading] = useState(true);

  function refreshInfo() {
    setIsLoading(true);
    ItemsService.getAllProducts().then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    refreshInfo();
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setName(product.name);
    setShortDescription(product.shortDescription);
    setFullDescription(product.fullDescription);
    setAvailableSizes(product.availableSizes);
    setPrice(product.price);
    setPhoto(product.photo);
    setCategory(product.category);
    setId(product._id);
    setShowForm(true);
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
      })
      .then((response) => {
        const updatedProduct = response.data;
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setSelectedProduct(null);
        setName("");
        setShortDescription("");
        setFullDescription("");
        setAvailableSizes([]);
        setPrice(0);
        setPhoto("");
        setShowForm(false);
        refreshInfo();
      });
  };

  const handleDelete = () => {
    ItemsService.deleteProductById({
        category,
        id,
      })
      .then(() => {
        refreshInfo();
        setShowForm(false);
      });
  };

  const handleAddProduct = () => {
    setShowAddProduct(true);
  };

  const handleCancelAddProduct = () => {
    setShowAddProduct(false); // Set the state variable to false to hide the component
  };

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <div className="buttons">
        <button className="admin--button" onClick={handleAddProduct}>Додати товар</button>
        <button className="admin--button" onClick={() => refreshInfo()}>Оновити</button>
      </div>
      

      {showAddProduct && (
        <AddProduct onCancel={handleCancelAddProduct} onAdd={refreshInfo} />
      )}

      {selectedProduct && (
        <form className="form--admin admin--form" onSubmit={handleSubmit}>
          <label className="admin--label">
            Short Description:
            <input className="admin--input"
              type="text"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </label>
          <label className="admin--label">
            Full Description:
            <textarea className="admin--input"
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
            />
          </label>
          <label className="admin--label">
            Sizes:
            <input className="admin--input"
              type="text"
              value={availableSizes}
              onChange={(e) => setAvailableSizes(e.target.value.split(","))}
            />
          </label>
          <label className="admin--label">
            Price:
            <input className="admin--input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label className="admin--label">
            Image:
            <input className="admin--input"
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </label>
          <button type="submit" className="admin--button--save">Зберегти зміни</button>
          <button
            className="admin--button--delete"
            type="button"
            onClick={() => handleDelete()}
          >
            Видалити
          </button>
          <button className="admin--button--delete">Закрити</button>
        </form>
      )}
      <table className="admin--table">
        <thead className="admin--thead">
          <tr className="admin--table--row title">
            <th>Категорія</th>
            <th>Назва</th>
            <th>Короткий опис</th>
            <th>Повний опис</th>
            <th>Доступні розміри</th>
            <th>Ціна</th>
            <th>Фото</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {products.map((product) => (
            <tr  className="admin--table--row" key={product.id}>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td className="short--description">{product.shortDescription}</td>
              <td className="full--description">{product.fullDescription}</td>
              <td className="admin--sizes">
                {product.availableSizes
                  ? product.availableSizes.join(", ")
                  : ""}
              </td>
              <td>{product.price}</td>
              <td><img src= {product.photo} className="admin--img" alt = ""></img></td>
              <td>
                <button className="admin--edit" onClick={() => handleEdit(product)}>Ред</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>      
    </div>
  );
}

export default ProductsTable;
