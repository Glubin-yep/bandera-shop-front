import { useState, useEffect } from "react";
import AddProduct from "./addProduct";
import ItemsService from "../../services/ItemsService";
import "./adminPage.css";

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

  function refreshInfo() {
    ItemsService.getAllProducts().then((response) => {
      setProducts(response.data);
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
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={() => refreshInfo()}>Update</button>

      {showAddProduct && (
        <AddProduct onCancel={handleCancelAddProduct} onAdd={refreshInfo} />
      )}
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Short Description</th>
            <th>Full Description</th>
            <th>Available sizes</th>
            <th>Price</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.shortDescription}</td>
              <td>{product.fullDescription}</td>
              <td>
                {product.availableSizes
                  ? product.availableSizes.join(", ")
                  : ""}
              </td>
              <td>{product.price}</td>
              <td><img src= {product.photo} alt = ""></img> {product.photo}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProduct && (
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Save Changes</button>
          <button
            type="button"
            style={{ backgroundColor: "red" }}
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </form>
      )}
    </div>
  );
}

export default ProductsTable;
