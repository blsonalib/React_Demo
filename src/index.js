import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);

ReactDOM.render( React.createElement("h1", null, "Hello World"), document.getElementById('root'));
var h1 = document.createElement(h1);
h1.innerHTML = "sonali bankar";
document.getElementById('root').appendChild(h1);
