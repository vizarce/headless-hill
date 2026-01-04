import React from "react";

export function Greeting(props) {
  return (
    <>
      <div className={props.class}>
        <h1>Привіт, {props.name}!</h1>
        <h3>You are welcome to the {props.location}</h3>
      </div>
    </>
  );
}

export function Greet(props) {
  return <h1 style={{ color: props.color }}>Привіт, {props.name}!</h1>;
}
