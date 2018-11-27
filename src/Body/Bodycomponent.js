import React from 'react';
import '../CSS/BodyStyling.css';
import SingleNavComponent from './SingleNavComponent.js';

const newyorkUrl = "https://www.metaweather.com/api/location/2459115/";
const osloUrl = "https://www.metaweather.com/api/location/862592/";
const hongkongUrl = "https://www.metaweather.com/api/location/2165352/";

const defaultBodycomponent = (props) =>{
   return(
    <div className="default_body">
    <div id="newYorkComponent" onClick={() =>{props.klikk(newyorkUrl)}}>
    <SingleNavComponent tekst="New York"></SingleNavComponent>
    </div>
    <div id="osloComponent" onClick={() =>{props.klikk(osloUrl)}}>
    <SingleNavComponent tekst="Oslo"></SingleNavComponent>
    </div>
    <div id="hongKongComponent" onClick={() =>{props.klikk(hongkongUrl)}}>
    <SingleNavComponent tekst="Hong Kong"></SingleNavComponent>
    </div>
    </div>
  
   )

};

export default defaultBodycomponent;