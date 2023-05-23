import { useState, useEffect } from "react";
import EditOrder from "./editOrder";
import OrdersService from "../../../services/OrderService";
import LoadingScreen from "../../loading/loading";
import "../../../style.css";

function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showEditOrder, setShowEditOrder] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  function refreshInfo() {
    setIsLoading(true);
    OrdersService.getAllOrders().then((response) => {
      console.log(response.data);
      setOrders(response.data);
      setSortColumn(null);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    refreshInfo();
  }, []);

  const handleOpenEditOrder = (order) => {
    setSelectedOrder(order);
    setShowEditOrder(true);
  };

  const handleCloseEditOrder = () => {
    setShowEditOrder(false);
    refreshInfo();
  };

  const handleSort = (columnName) => {
    let direction = "asc";
    if (sortColumn === columnName && sortDirection === "asc") {
      direction = "desc";
    }
    setSortColumn(columnName);
    setSortDirection(direction);

    const sorted = orders.slice().sort((a, b) => {
      if (a[columnName] < b[columnName]) return direction === "asc" ? -1 : 1;
      if (a[columnName] > b[columnName]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setOrders(sorted);
  };

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <div className="buttons">
        <button className="admin--button" onClick={() => refreshInfo()}>
          Оновити
        </button>
      </div>      

      {selectedOrder && showEditOrder && (
        <div className="overlay">
          <div className="overlay--content">
            <EditOrder order={selectedOrder} onClose={handleCloseEditOrder} />
          </div>
        </div>
      )}

      <OrderTable
        orders={orders}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        handleSort={handleSort}
        handleOpenEditOrder={handleOpenEditOrder}
      />
    </div>
  );
}

function OrderTable({
  orders,
  sortColumn,
  sortDirection,
  handleSort,
  handleOpenEditOrder,
}) {
  const sortArrow = sortDirection === "asc" ? "↑" : "↓";

  return (
    <table className="admin--table">
      <thead className="admin--thead">
        <tr className="admin--table--row title">
          <th onClick={() => handleSort("status")}>
            Статус
            {sortColumn === "status" ? sortArrow : ""}
          </th>
          <th> name </th>
          <th> phone </th>
          <th>postoffice</th>
          <th>region</th>
          <th>items</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {orders.map((order) => (
          <tr className="admin--table--row" key={order.id}>
            <td>{order.status}</td>
            <td>{order.name}</td>
            <td>{order.phone}</td>
            <td>{order.postoffice}</td>
            <td> {order.region} </td>
            <td>{order.items.length}</td>
            <td>{order.email}</td>
            <td>
              <button
                className="admin--edit"
                onClick={() => handleOpenEditOrder(order)}
              >
                Ред
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;
