import React from "react";
// import Favourite from "./Faviourite";
import Airtel from "./Airtel";
import Amazon from "./Amazon"

const favS = "amazon"
const Favourite = () => {
    if (favS === "airtel") {
     return <Airtel/>
    } else {
        return <Amazon/>       
 } 
}
const App = () => {
  return (
    <>
      <h1 className="main-heading">List of the best movies in Airtel Extreme</h1>
       <Favourite/> 
    </>
  );  
}
export default App;