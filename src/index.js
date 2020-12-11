import React from "react";
import ReactDOM from "react-dom";
import Cards from "./App"
import Sdata from "./Sdata"

console.log(Sdata[0].sname);
ReactDOM.render(

  <>
    <h1 className="main-heading">List of the best movies in Airtel Extreme</h1>
    {Sdata.map( (value) =>{
      return (
        <Cards
      imgsrc={value.imgsrc}
      title={value.title}
      sname={value.sname}
      link={value.link}
    />
    )
    })}
    
      </>,
  document.getElementById("root")
);