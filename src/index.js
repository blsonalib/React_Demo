import React from "react";
import ReactDOM from "react-dom";
var myName = "Sonali";
var currentDate = new Date().toLocaleDateString();
var currentTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>Hello, I am {myName}</h1>
    <p>Taday's date is:  {currentDate} </p>
    <p>Today's current Time is:  {currentTime}</p>
 </>,
  document.getElementById('root')
);
