import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const PizzaDetail = () => {
  const { id } = useParams();
  const { pizza, setCartItems } = useContext(GlobalContext);
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    const pizzaDetails = pizza.find((item) => item.id === id);

    setSelectedPizza(pizzaDetails);
  }, [id, pizza]);

 
  if (!selectedPizza) {
    return <div>Cargando...</div>;
  }

  const handleAddToCart = () => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...selectedPizza, quantity: 1 },
    ]);
  };
  return (
    <div className="grid__item">
      <div className="card">
        <img className="card__img" src={selectedPizza.img} alt={selectedPizza.name} />
        <div className="card__content">
          <h2 className="card__header">{selectedPizza.name}</h2>
          <p className="card__text">{selectedPizza.desc}</p>
          <p className="card__price">Precio: ${selectedPizza.price / 100}</p>
          <ul>
            {selectedPizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <button className="card__btn_cart" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;
