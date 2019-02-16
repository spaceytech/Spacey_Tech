import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import DetailProduct from "./Components/Pages/DetailProduct";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/handyman"
        render={renderProps => (
          <DetailProduct
            title="General Handyman"
            tagline="Taskers can help with handyman tasks around your home."
            backgroundImage="/images/handymen.jpg"
          />
        )}
      />
    </Switch>
  );
};

export default Routes;
