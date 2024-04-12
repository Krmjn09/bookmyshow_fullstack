import React from "react";

const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ color: "red", padding: "10px" }}
        onClick={props.onClick}
      ></div>
    </>
  );
};

const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onClick={props.onClick}
      ></div>
    </>
  );
};
export { NextArrow, PrevArrow };
