import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Checkout from "../Checkout";

const Modal = ({ isOpen, children, className = "" , onClose}) => {
  const dialog = useRef();
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    const modal = dialog.current;
    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [isOpen]);

  const handleCheckout = () => {
    setCheckout((prevState) => !prevState);
    if (!checkout) {
      dialog.current.close();
    }
  };

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
