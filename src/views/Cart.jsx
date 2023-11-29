// components/Cart.js
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(GlobalContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0) / 100;
  };

  const incrementQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="productos">
      {cartItems.map((item) => (
        <div key={item.id} className="card">
          <img className="card-img" src={item.img} alt={item.name} />
          <div className="card-content">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <p>Precio: ${item.price / 100}</p>
            <p>Cantidad: {item.quantity}</p>
            <button className="btn" onClick={() => incrementQuantity(item)}>
              Incrementar
            </button>
            <button className="btn" onClick={() => decrementQuantity(item)}>
              Decrementar
            </button>
          </div>
        </div>
      ))}
      <div className="precio-total">
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
