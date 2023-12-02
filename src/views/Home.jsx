import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

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
    <div className="grid">
      {pizza.map((item, index) => (
        <div key={index} className="grid__item">
          <div className="card">
            <img className="card__img" src={item.img} alt={item.name} />
            <div className="card__content">
              <h2 className="card__header">{item.name}</h2>
              <p className="card__price">Precio: ${item.price / 100}</p>
              <ul className="card__ingredients">
                {item.ingredients.map((ingredient, ingredientIndex) => (
                  <li key={ingredientIndex}>{ingredient}</li>
                ))}
              </ul>
              <button className="card__btn" onClick={() => addToCart(item)}>
                Agregar al carrito
              </button>
              <button>
                <Link to={`/pizza/${item.id}`} className="card__btn">
                  Ver mas
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

