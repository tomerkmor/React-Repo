import React, { useContext } from "react";
import Modal from "./UI/Modal";

import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../Store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

// no request will be send initially because it will only set initially only if the method is 'GET'
const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData
  } = useHttp(`${userProgressCtx.server}/orders`, requestConfig);
  // MY CODE
  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity * item.price * 3.7,
    0
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleFinish = () => {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart()
    clearData()
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  };

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        isOpen={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>We will get back to you with more details via email within the next few minutes.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay.</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={userProgressCtx.progress === "checkout"}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>

        <Input label="Full Name" id="name" type="text" required />
        <Input label="E-Mail Address" id="email" text="email" required />
        <Input label="Street" id="street" type="text" required />
        <Input
          label="Phone Number"
          id="phone"
          text="tel"
          pattern="[0-9]{10}"
          placeHolder="format: 0545616295"
          required
        />

        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="number" required />
          <Input label="City" id="city" type="text" required />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
