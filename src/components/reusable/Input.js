import React from "react";

const Input = props => (
  <>
    {!!props.label && (
      <label className="form__label" htmlFor={props.name}>
        {props.label}
      </label>
    )}

    <input
      className="form__input --margin-top"
      type="text"
      {...props}
      id={props.name}
    />
  </>
);

export default Input