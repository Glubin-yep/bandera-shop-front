import { useState, useEffect } from "react";
import AddProduct from "./addProduct";
import EditProduct from "./editProduct";
import ItemsService from "../../services/ItemsService";
import LoadingScreen from "../loading/loading";
import "../../style.css";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  function refreshInfo() {
    setIsLoading(true);
    ItemsService.getAllProducts().then((response) => {
      setProducts(response.data);
      setSortColumn(null);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    refreshInfo();
  }, []);

  const handleAddProduct = () => {
    setShowAddProduct(true);
  };

  const handleCancelAddProduct = () => {
    setShowAddProduct(false);
  };
  
  const handleOpenEditProduct = (product) => {
    setSelectedProduct(product);
    setShowEditProduct(true);
  };

  const handleCloseEditProduct = () =>{
    setShowEditProduct(false);
    refreshInfo();
  };

  const handleSort = (columnName) => {
    let direction = "asc";
    if (sortColumn === columnName && sortDirection === "asc") {
      direction = "desc";
    }
    setSortColumn(columnName);
    setSortDirection(direction);

    const sorted = products.slice().sort((a, b) => {
      if (a[columnName] < b[columnName]) return direction === "asc" ? -1 : 1;
      if (a[columnName] > b[columnName]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setProducts(sorted);
  };

  const sortArrow = sortDirection === "asc" ? "↑" : "↓";

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <div className="buttons">
        <button className="admin--button" onClick={handleAddProduct}>
          Додати товар
        </button>
        <button className="admin--button" onClick={() => refreshInfo()}>
          Оновити
        </button>
      </div>

      {showAddProduct && (
        <div className="overlay">
          <div className="overlay--content">
            <AddProduct onCancel={handleCancelAddProduct} onAdd={refreshInfo} />
          </div>
        </div>
      )}

      {selectedProduct && showEditProduct && (
      <div className="overlay">
          <div className="overlay--content">
            <EditProduct product={selectedProduct} onClose={handleCloseEditProduct}/>
          </div>
        </div>
      )}
      <table className="admin--table">
        <thead className="admin--thead">
          <tr className="admin--table--row title">
            <th onClick={() => handleSort("category")}>
              Категорія
              {sortColumn === "category" ? sortArrow : ""}
            </th>
            <th onClick={() => handleSort("name")}>
              Назва
              {sortColumn === "name" ? sortArrow : ""}
            </th>
            <th>Короткий опис</th>
            <th>Повний опис</th>
            <th>Доступні розміри</th>
            <th onClick={() => handleSort("price")}>
              Ціна
              {sortColumn === "price" ? sortArrow : ""}
            </th>
            <th>Фото</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {products.map((product) => (
            <tr className="admin--table--row" key={product.id}>
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
              <td>
                <img src={product.photo} className="admin--img" alt=""></img>
              </td>
              <td>
                <button
                  className="admin--edit"
                  onClick={() => handleOpenEditProduct(product)}
                >
                  Ред
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
