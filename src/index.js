import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
let curTime = new Date( 2020,11,8,13);
curTime = curTime.getHours();
let greeting = "";
const cssColor = {};
if (curTime >= 12 && 11>= curTime) {
  greeting = "Good Morning";
  cssColor.color = "green";
} else if (curTime >= 12 && 19 >= curTime) {
  greeting = "Good Afternoon";
  cssColor.color = "orange";
} else {
  greeting = "Good Night";
  cssColor.color = "black";
}


ReactDOM.render(
  <>
    <div className="box">
      <h2>Hello Sir,  <span style={cssColor}>{ greeting }</span></h2>
    </div>
 </>,
  document.getElementById("root")
);
