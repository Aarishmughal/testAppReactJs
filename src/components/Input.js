import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="row mb-2">
        <div className="col">
          <label for={props.id}>Enter {props.label}</label>
          <input className={props.className} name={props.name} id={props.id} />
        </div>
      </div>
    </>
  );
};

export default Input;
