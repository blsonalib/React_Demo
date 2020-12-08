import React from "react";
import ReactDOM from "react-dom";
import { Javascript } from "./App";
import myFav, { language, NewLanguage,bestLanguage } from "./App";

ReactDOM.render(
  <ol>
    <li>{ myFav }</li>
    <li>{language}</li>
    <li>{NewLanguage()}</li>
    <li>{bestLanguage() }</li>
</ol>,
 document.getElementById("root")
);