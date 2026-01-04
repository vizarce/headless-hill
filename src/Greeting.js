import React from "react";

export default function Greeting(props) {
  return (
    <>
      <div className={props.class}>
        <h1>Привіт, {props.name}!</h1>
        <h3>You are welcome to the {props.location}</h3>
        <p>Lorem ipsum dolor bode or in dasvile ut a wetre polba viksum.</p>
      </div>
    </>
  );
}
