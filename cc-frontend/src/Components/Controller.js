import React, { useState } from "react";
import Login from "./Login";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import CollectionBoxesPage from "./CollectionBoxesPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Controller(props) {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/boxes">
          <CollectionBoxesPage api={props.api} />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
