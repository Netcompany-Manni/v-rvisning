import React from 'react';
import '../CSS/HeaderStyling.css';

const person = (props) => {
    return (
      <div onClick={props.click}>
      <p > My name is {props.name} </p>
      <p> My age is {props.age} </p>
      <p>{props.children}</p>
      </div>
    )
};

export default person;
