import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

//Render function
ReactDOM.render(<Dashboard />, document.getElementById("root"));

serviceWorker.unregister();
