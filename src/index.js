import React from "react";
import ReactDOM from "react-dom";
import Cards from "./App"
import Sdata from "./Sdata"

console.log(Sdata[0].sname);
ReactDOM.render(

  <>
    <h1 className="main-heading">List of the best movies in Airtel Extreme</h1>
    <Cards
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />
     <Cards
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
     <Cards
       imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />
     <Cards
       imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}

    />
     <Cards
       imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].link}

      />
  </>,
  document.getElementById("root")
);