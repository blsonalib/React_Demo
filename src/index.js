import React from 'react';
import ReactDOM from 'react-dom';
// Render method wants only single element if want multiple element in render method the we can use div element
// In render method we can use multiple element in the form of arrays
ReactDOM.render(
  <div>
 <h1>Hello World</h1>
  <p>This is paragraph </p>
  </div>,
  document.getElementById('root')
);

