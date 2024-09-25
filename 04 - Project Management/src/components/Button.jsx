import React from "react";

const Button = ({ children , ...props }) => {
  return (
    <button
      {...props}
      className={"bg-stone-700 text-stone-400 rounded-md px-4 py-2 text-xs md:text-base hover:text-stone-100 hover:bg-stone-600"}
    >
      {children}
    </button>
  );
};

export default Button;
