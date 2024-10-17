import React, { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext); 

  const handleAddMealToCart = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`${userProgressCtx.server}/${meal.image}`} alt={meal.name} />
        <div className="item-content">
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price*3.7)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
