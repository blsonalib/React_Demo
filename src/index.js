import React from 'react';
import ReactDOM from 'react-dom';
let myElement = (
  
  <div>
    <h2>This is heading</h2>
    <p>This is paragraph</p>
    <div>
    <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact</li>
  </ul>
    </div>
  </div>
);
ReactDOM.render(
  myElement, document.getElementById('root')
);

