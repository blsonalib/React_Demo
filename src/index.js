import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);

ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Hello World"), document.getElementById('root'));
var h1 = document.createElement(h1);
h1.innerHTML = "sonali bankar";
document.getElementById('root').appendChild(h1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
