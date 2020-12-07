import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
var name = "Sonali";  
var img1 = "https://picsum.photos/200/300";
var img2 = "https://picsum.photos/200/270";
var img3 = "https://picsum.photos/300/300";
var links = "https://www.facebook.com/"
ReactDOM.render(
  <>
    <h1 className="heading">I am {name}</h1>
    <div className="image-box">
        <img src={img1} alt="This is image 1" />
        <img src={img2} alt="This is image 2" />
        <a href={ links} target="-blank">
        <img src={img3} alt="This is image 3" />
        </a>
    </div>
    
  </>,
     document.getElementById("root")
);