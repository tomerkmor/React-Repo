import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../util/formatting";

const CartItem = ({ item, onIncrease, onDecrease}) => {
  const cartCtx = useContext(CartContext);
  const handleAddItem = (item) => {
    cartCtx.addItem(item);
  };

  const handleRemoveItem = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <li className="cart-item" key={item.id}>
      <p>
        {item.name} - ({item.quantity} x {currencyFormatter.format(item.price)}) ={" "}
        {currencyFormatter.format(item.quantity * item.price)}
      </p>
      <div>
        <div className="cart-item-actions">
          <button onClick={() => onDecrease(item.id)}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() => onIncrease(item)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
