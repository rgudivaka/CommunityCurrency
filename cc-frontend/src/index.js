import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Controller from "./Components/Controller";

//Render function
ReactDOM.render(<Controller />, document.getElementById("root"));

serviceWorker.unregister();
