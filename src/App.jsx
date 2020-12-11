import React from "react";
import "./index.css"
function Cards(propes) {
  return (
    
      <div className="container card-container">
      <div className="card">
          <img src={propes.imgsrc} alt="movie" ></img>
        </div>
        <div className="card-content">
          <p className="para-title">{propes.title}</p>
          <h1 className="heading">{propes.sname}</h1>
          <a href={propes.link} target="_blank">
            <button className="btn"> Watch Now</button>
          </a>
    </div>
     
      </div>
   

    );
}
export default Cards;