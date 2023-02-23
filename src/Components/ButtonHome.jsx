import React from "react";
import "./buttonHome.css";

const ButtonHome = (props) => {
  return (
    <button
      className={props.className}
      onClick={() => (window.location.href = props.action)}
    >
      {props.text}
    </button>
  );
};
export default ButtonHome;
