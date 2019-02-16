import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login";
import DetailProduct from "./Components/Pages/DetailProduct";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/handyman"
        render={renderProps => (
          <DetailProduct
            title="General Handyman"
            tagline="Taskers can help with handyman tasks around your home."
            backgroundColor="linear-gradient(rgba(0, 191, 255,0.3), rgba(0, 191, 255,0.3))"
            backgroundImage="/images/handymen.jpg"
          />
        )}
      />
      <Route
        exact
        path="/laundry"
        render={renderProps => (
          <DetailProduct
            title="Laundry"
            tagline="Want sparkling clean clothes? Leave it to our taskers"
            backgroundColor="linear-gradient(rgba(255, 80, 80,0.3), rgba(255, 80, 80,0.3))"
            backgroundImage="/images/laundry.jpg"
          />
        )}
      />
      <Route
        exact
        path="/delivery"
        render={renderProps => (
          <DetailProduct
            title="Delivery"
            tagline="Need something delivered across town? We'll safely transport anything from couches to documents to takeaway food."
            backgroundColor="linear-gradient(rgba(91, 119, 34,0.5), rgba(91, 119, 34 ,0.5))"
            backgroundImage="/images/delivery.jpg"
          />
        )}
      />
      <Route
        exact
        path="/cleaning"
        render={renderProps => (
          <DetailProduct
            title="Cleaning"
            tagline="We can tackle your entire home and leave your space sparkling clean."
            backgroundColor="linear-gradient(rgba(204, 112, 51,0.5), rgba(204, 112, 51 ,0.5))"
            backgroundImage="/images/cleaning.jpg"
          />
        )}
      />
      <Route
        exact
        path="/assembly"
        render={renderProps => (
          <DetailProduct
            title="Flat pack assembly"
            tagline="Need something assembled? We can put together your desk, bed, cabinet, or bookcase."
            backgroundColor="linear-gradient(rgba(23, 59, 130,0.5), rgba(23, 59, 130 ,0.5))"
            backgroundImage="/images/assembly.jpg"
          />
        )}
      />
      <Route
        exact
        path="/installation"
        render={renderProps => (
          <DetailProduct
            title="Installation"
            tagline="From TVs to shelves to artwork to lights, Taskers will make sure it's properly mounted and hung."
            backgroundColor="linear-gradient(rgba(102, 51, 0,0.5), rgba(102, 51, 0 ,0.5))"
            backgroundImage="/images/installing.jpg"
          />
        )}
      />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
