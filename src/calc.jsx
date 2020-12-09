import React from "react";

function Addition(a, b) {
    let add = a + b;
    return add  ;
}

function Division(a, b) {
    let div = a / b;
    div = div.toFixed(2);
    return div;
}

function Multiplication(a,b) {
    let mul = a * b;
    return mul;
}

function Substraction(a, b) {
    let sub = a - b; 
    return sub;
}
export { Addition, Division, Multiplication, Substraction };