import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  const { pizza, cartItems, setCartItems } = useContext(GlobalContext);

  const addToCart = (item) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  return (
    <div className="productos">
      {pizza.map((item) => (
        <div key={item.id} className="card">
          <img className="card-img" src={item.img} alt={item.name} />
          <div className="card-content">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <p>Precio: ${item.price / 100}</p>
            <ul>
              {item.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button className="btn" onClick={() => addToCart(item)}>
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
