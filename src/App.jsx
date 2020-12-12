import React from "react";
import Airtel from "./Airtel";
import Amazon from "./Amazon";
import Favourite from "./Faviourite";

const favS = "Amazon";
const App = () => {
  return (
    <>
      <h1 className="main-heading">List of the best movies in Airtel Extreme</h1>
      {/* <Favourite/>  */}
      { favS === "Airtel" ? <Airtel /> : <Amazon />}
    </>
  );  
}
export default App;