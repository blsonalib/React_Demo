import React from 'react';
import ReactDOM from 'react-dom';
// Render method wants only single element if want multiple element in render method the we can use div element
// In render method we can use multiple element in the form of arrays if used above v16
ReactDOM.render(
//   <div>
//  <h1>Hello World</h1>
//   <p>This is paragraph </p>
//   </div>
[<h1>Hello World</h1>  ,<p>This is paragraph </p>, <h1>This is me</h1> ],
  document.getElementById('root')
);

