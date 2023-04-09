import { useCart } from "react-use-cart";
import "../../style.css";

function Cart() {
  const {
    isEmpty,
    items,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  console.log(items);

  return (
    <div className="cart">
      <h1 className="cart__title">Your Cart</h1>
      <p className="cart__total">
        <span className="cart__total-text">
          Total Items: {totalUniqueItems}
        </span>
        <span className="cart__total-price">${cartTotal.toFixed(2)}</span>
      </p>
      <div className="cart__items">
        {items.map((item) => (
          <div className="cart__item" key={item.id}>
            <img
              className="cart__item-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart__item-details">
              <h2 className="cart__item-title">{item.name}</h2>
              <p className="cart__item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart__item-controls">
              <button
                className="cart__item-button"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span className="cart__item-quantity">{item.quantity}</span>
              <button
                className="cart__item-button"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="cart__item-remove"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {items.length === 0 ? (
        <p className="cart__empty">Your cart is empty.</p>
      ) : (
        <button className="cart__button" onClick={() => emptyCart()}>
          Empty Cart
        </button>
      )}
    </div>
  );
}

export default Cart;
