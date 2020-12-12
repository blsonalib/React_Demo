import React from "react"
import Cards from "./Cards"
import Sdata from "./Sdata"

const App = () => {
  return (
    <>
      <h1 className="main-heading">List of the best movies in Airtel Extreme</h1>
      {Sdata.map((value) => {
        return (
          <Cards
            key={value.id}
            imgsrc={value.imgsrc}
            title={value.title}
            sname={value.sname}
            link={value.link}
          />
        )
      })}
    </>
  );  
}
export default App;