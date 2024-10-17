import React from "react";

const Error = ({ title, message }) => {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>message: {message}</p>
    </div>
  );
};

export default Error;
