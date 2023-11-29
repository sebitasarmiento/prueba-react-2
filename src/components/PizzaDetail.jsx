import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const PizzaDetail = () => {
  const { pizza } = useContext(GlobalContext);
  const { id } = useParams();
  const selectedPizza = pizza.find((item) => item.id === parseInt(id));

  if (!selectedPizza) {
    return <p>Pizza not found</p>;
  }

  return (
    <div className="pizza-detail">
      <img
        className="card-img"
        src={selectedPizza.img}
        alt={selectedPizza.name}
      />
      <div className="card-content">
        <h2>{selectedPizza.name}</h2>
        <p>{selectedPizza.desc}</p>
        <p>Precio: ${selectedPizza.price / 100}</p>
        <ul>
          {selectedPizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaDetail;
