import React from "react";
import Heading from "./Heading";
import Image from "./Image";
import "./index.css"
function Cards(propes) {
  return (
      <div className="container card-container">
      <div className="card">
              <Image imgsrc={ propes.imgsrc}/>
        </div>
        <div className="card-content">
          <p className="para-title">{propes.title}</p>
              <Heading sname={propes.sname}/>
          <a href={propes.link} target="_blank">
            <button className="btn"> Watch Now</button>
          </a>
    </div>
     
      </div>
    );
}
export default Cards;