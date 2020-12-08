import React from "react";
import ReactDOM from "react-dom";

const heading = {
  color: "#f555fe",
  marginTop: "20px",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "500",
  fontFamily: "'Poppins', sans-serif"
};

const imageBox = {
  margin: "auto",
  display: "flex",
  justifyContent: "center"
};

var name = "Sonali";  
var img1 = "https://picsum.photos/200/300";
var img2 = "https://picsum.photos/200/270";
var img3 = "https://picsum.photos/300/300";
var links = "https://www.facebook.com/"
ReactDOM.render(
  <>
    <h1
      style={heading}
    >I am {name}</h1>
    <div style={imageBox} >
        <img src={img1} alt="This is image 1" />
        <img src={img2} alt="This is image 2" />
        <a href={ links} target="-blank">
        <img src={img3} alt="This is image 3" />
        </a>
    </div>
    
  </>,
     document.getElementById("root")
);