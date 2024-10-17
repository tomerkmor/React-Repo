import React, { useContext, useRef, useState } from "react";
import Modal from "./UI/Modal";
import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../Store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity * item.price * 3.7,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  const handleOpenCheckout = () => {
    userProgressCtx.showCheckout();
  };

  return (
    <nav>
      <Modal
        className="cart"
        isOpen={userProgressCtx.progress === "cart"}
        onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
      >
        <h2>Your Cart</h2>

        <ul>
          {cartCtx.items.length > 0 ? (
            cartCtx.items.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                onIncrease={cartCtx.addItem}
                onDecrease={cartCtx.removeItem}
              />
            ))
          ) : (
            <div className="nisan">
              <p>יקמצן תקנה משהו</p>
            </div>
          )}
        </ul>

        <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
        <p className="modal-actions">
          <Button textOnly onClick={handleCloseCart}>
            Close
          </Button>
          {cartCtx.items.length > 0 && (
            <Button onClick={handleOpenCheckout}>Go to Checkout</Button>
          )}
        </p>
      </Modal>
    </nav>
  );
};

export default Cart;
