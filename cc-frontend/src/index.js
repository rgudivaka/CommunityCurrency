import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import firebase from "firebase";
import Controller from "./Components/Controller";
import CommunityCurrencyAPI from "./Shared/CommunityCurrencyAPI";

firebase.initializeApp({
  projectId: "communitycurrency-109db",
});

const api = new CommunityCurrencyAPI(firebase.functions());

api.updateChartData({ id: 0 }).then(function (result) {
  console.log(result);
});

api.updateChartData({ id: 1 }).then(function (result) {
  console.log(result);
});

api.updateChartData({ id: 2 }).then(function (result) {
  console.log(result);
});

api.boxData({ id: 1 }).then(function (result) {
  console.log(result);
});

api.chartData({ id: 0 }).then(function (result) {
  console.log(result);
});

//Render function
ReactDOM.render(<Controller api={api} />, document.getElementById("root"));

serviceWorker.unregister();
