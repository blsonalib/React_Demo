import React from "react";
import Sdata from "./Sdata"
import Cards from "./Cards"
const Airtel = () => {

  return (
    <Cards
      key={Sdata[0].id}
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />
  );
}

export default Airtel;  