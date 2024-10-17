import React, { useContext } from "react";

import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="App Logo" />
        <h1>הגן עדן של ניסן</h1>
      </div>
      <Button textOnly onClick={handleShowCart}>
        Cart ({totalItems})
      </Button>
    </header>
  );
};

export default Header;
