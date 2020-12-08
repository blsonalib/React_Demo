import React from "react";
// import "./index.css"
function App() {
  
    let curTime = new Date(2020,11,8,10);
    curTime = curTime.getHours();
    let greeting = " ";
    const cssColor = {};

    if (curTime <= 12 && curTime <= 11) {
        greeting = "Good Morning";
        cssColor.color = "green";
    } else if (curTime >= 12 && curTime <=17) {
        greeting = "Good Afternoon";
        cssColor.color = "orange";

    } else {
        greeting = "Good Night";
        cssColor.color = "black";
    }

    return (
        <>
            <div className="box">
                <h1>Hello sir, <span style= {cssColor}> { greeting } </span></h1>
            </div>
        </>
    )
}
export default App;