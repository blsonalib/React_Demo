import React from "react";
import { Addition, Division, Multiplication, Substraction } from "./calc";

function App(){
    return (
        <ul>
            <li>Addition of two numbers:  {Addition(9, 5)}</li>
            <li>Substtraction of two number: {Substraction(8, 4)}</li>
            <li>Multiplication of two number: {Multiplication(10, 9)}</li>
            <li>Division of two number: {Division(40, 3)}</li>
        </ul>
    );
}
export default App;