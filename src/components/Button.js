import React from "react";

const Button = (props) => {
  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <button
            className={props.className}
            type="submit"
            style={{width:'100%'}}
          >
            {props.text}
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
