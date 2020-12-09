import React from "react";

function Cards(propes) {
    return (
      <div className="Card-box">
        <div className="card">
          <img src={propes.imgsrc} alt="movie"></img>
        </div>
        <div className="card-content">
          <p>{propes.title}</p>
          <h1>{propes.sname}</h1>
          <a href={propes.link} className="btn">
            <button> Watch Now</button>
          </a>
        </div>
      </div>
    );
}
export default Cards;