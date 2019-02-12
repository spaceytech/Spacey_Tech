import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
