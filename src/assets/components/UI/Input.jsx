import React from "react";
import "./Input.module.scss";

const Input = (props) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export default Input;
