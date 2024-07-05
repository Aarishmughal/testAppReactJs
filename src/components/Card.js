import React from "react";
import Input from "./Input";
import Button from "./Button";

const Card = (props) => {
  return (
    <>
      <div className="card p-3">
        <div className="row">
          <div className="col">
            <h1 className="display-3">{props.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="display-5 fst-italic">{props.subtitle}</p>
          </div>
        </div>
        <Input className="form-control" id="field1" name="field1" label="Field 1"/>
        <Input className="form-control" id="field2" name="field2" label="Field 2"/>
        <Input className="form-control" id="field3" name="field3" label="Field 3"/>
        <Button className="btn btn-outline-primary" text="Submit"/>
      </div>
    </>
  );
};

export default Card;
