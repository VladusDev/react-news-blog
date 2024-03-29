import React from "react";
import "./Button.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  );
};

export default Button;
