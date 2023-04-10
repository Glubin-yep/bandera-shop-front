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

  if (isEmpty) return (
    <div className="empty--cart--view">
      <h1 className="cart__title">КОРЗИНА</h1>
      <p className="cart__empty">Ваша корзина пуста</p>
    </div>
  );

  console.log(items);

  return (
    <div className="cart">
      <h1 className="cart__title">КОРЗИНА</h1>
      <div className="cart--info">
          <p className="cart__total">
          <span className="cart__total-text">
            Загальна кількість: {totalUniqueItems}
          </span>
          <span className="cart__total-price">Сума: {cartTotal} грн.</span>
          </p>
        <div className="cart__items">
          {items.map((item) => (
            <div className="cart__item" key={item.id}>

              <div className="cart__item--left">
                <img
                  className="cart__item-image"
                  src={item.image}
                  alt={item.name}
                />
                <div className="cart__item-details">
                  <h2 className="cart__item-title">{item.name}</h2>
                  <p className="cart__item-price">{item.price} грн.</p>
                </div>
              </div>

              <div className="cart__item--right">
                <div className="cart__item-controls">
                  <button
                    className="cart__item-button"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <span className="cart__item-quantity">{item.quantity}</span>
                  <button
                    className="cart__item-button minus"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    --
                  </button>
                </div>
                <button
                  className="cart__item-remove"
                  onClick={() => removeItem(item.id)}
                >
                  Видалити
                </button>
              </div> 
            </div>
          ))}
        </div>
      </div>
      <div className="cart--empty--button">
        {items.length === 0 ? (
          <p className="cart__empty">Your cart is empty.</p>
        ) : (
          <button className="cart__button" onClick={() => emptyCart()}>
            Очистити корзину
          </button>
        )}
      </div>
      <div className="client--info">
        <h1 className="cart__title">ДАНІ</h1>
        <div className="client--info--field">
              <input
                type="text"
                className="client--info--data pib"
                placeholder="ПІБ"
                maxLength="20"
              />
        </div>
        <div className="client--info--field">
              <input
                type="number"
                className="client--info--data phone number--field"
                placeholder="Номер телефону"
                maxLength="20"
              />
        </div>
        <div className="client--info--field">
              <input
                type="text"
                className="client--info--data region"
                placeholder="Область"
                maxLength="20"
              />
        </div>
        <div className="client--info--field">
              <input
                type="text"
                className="client--info--data city"
                placeholder="Місто"
                maxLength="20"
              />
        </div>
        <div className="client--info--field">
              <input
                type="number"
                className="client--info--data postoffice number--field"
                placeholder="Відділення"
                maxLength="20"
              />
        </div>
        <button className="cart__button order--button">
            Оформити замовлення
        </button>
      </div>
    </div>
  );
}

export default Cart;
