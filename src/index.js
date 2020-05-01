import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
//The 'as' word only makes easy the call to browser router, it's optional

//create-react-app looks at index.js to determine what files are in your app.
/* 
Line 3 creates a const alled render that references react-dom's render
function. Equivalent to:
import ReactDOM from "react-dom";
const render = ReactDOM.render; 
*/

/*
Render recives two arguments.
The first one is the component that we want to render.
JSX supports self-closing tags much like HTML.
The second argument, we need to tell React which DM element it should render into
*/
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
//We use the div called 'root' defined on index.html, line 31.
