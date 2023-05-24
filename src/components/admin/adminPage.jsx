import { useState } from "react";
import ProductTable from "./product/productTable";
import "../../style.css";
import OrdersTable from "./order/orderTable";

function AdminPage() {
  const [displayedTable, setDisplayedTable] = useState("Product"); // Add state for displayed table

  const handleToggleTable = () => {
    const newDisplayedTable =
      displayedTable === "Product" ? "Order" : "Product";
    setDisplayedTable(newDisplayedTable);
  };

  return (
    <div>
      <div className="buttons">
        <button className="admin--button" onClick={handleToggleTable}>
          {displayedTable === "Product"
            ? "Перейти до замовлень"
            : "Перейти до товарів"}
        </button>
      </div>

      {displayedTable === "Product" ? <ProductTable /> : <OrdersTable/>}
    </div>
  );
}

export default AdminPage;
