import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="inputWrapper">
      <div className="logoWrapper">
        <img src={props.src} alt={props.alt} />
      </div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        style={{
          "--placeholder-color": props.color,
        }}
      />
    </div>
  );
};

export default Input;
