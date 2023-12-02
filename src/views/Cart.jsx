import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(GlobalContext);

  const calculateTotal = () => {
    return (
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0) / 100
    );
  };

  const handleRemoveProduct = (item) => {
    const existingProduct = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingProduct.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...existingProduct, quantity: existingProduct.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const handleAddProduct = (item) => {
    const existingProduct = cartItems.find((cartItem) => cartItem.id === item.id);

    if (!existingProduct) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : cartItem
        )
      );
    }
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };
  return (
    <div className="grid">
      {cartItems.map((item) => (
        <div key={item.id} className="grid__item">
          <div className="card">
            <img className="card__img" src={item.img} alt={item.name} />
            <div className="card__content">
              <h2 className="card__header">{item.name}</h2>
              <p className="card__text">{item.desc}</p>
              <p className="card__price">Precio: ${item.price / 100}</p>
              <p className="card__quantity">Cantidad: {item.quantity}</p>
              <button className="card__btn_cart" onClick={() => handleAddProduct(item)}>
                +
              </button>
              <button className="card__btn_cart" onClick={() => handleRemoveProduct(item)}>
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="precio-total">
        <button className="btn" onClick={() => handleRemoveAll(cartItems[1])}>
          Borrar Todo
        </button>
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
