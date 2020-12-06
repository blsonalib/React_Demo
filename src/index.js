import React from 'react';
import ReactDOM from 'react-dom';
let myElement = (
  <React.Fragment>
 <label id="firstName">FirstName</label>
  <input type="text" id="firstName" ></input>
  </React.Fragment>
 
);
ReactDOM.render(
  myElement, document.getElementById('root')
);

