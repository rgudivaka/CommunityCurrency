import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import firebase from "firebase"
import CommunityCurrencyAPI from './Shared/CommunityCurrencyAPI'

firebase.initializeApp({
    
    projectId: 'communitycurrency-109db'
  });

const api = new CommunityCurrencyAPI(firebase.functions());
api.boxData({}).then(function(result){
    console.log(result);
});
api.boxData({}).then(function(result){
    console.log(result);
});
api.boxData({}).then(function(result){
    console.log(result);
});
//Render function
ReactDOM.render(<Dashboard />, document.getElementById("root"));

serviceWorker.unregister();
