import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import DetailProduct from "./Components/Pages/DetailProduct";
import Booking from "./Components/Pages/Booking";
import BookingForm from "./Components/Ui/Accordion/BookingForm";
import Confirm from "./Components/Ui/Confirm";
import Taskers from "./Components/Ui/Taskers";
import BecomeTasker from "./Components/Pages/Career/BecomeTasker";
import Dashboard from "./Components/Pages/Dashboard";
import Categories from "./Components/Pages/Categories";
import TaskerDetail from "./Components/Pages/TaskerDetail";
import Profile from "./Components/Pages/Profile/Profile";
import Account from "./Components/Pages/Profile/Account";
import Billing from "./Components/Pages/Profile/Billing";
import Password from "./Components/Pages/Profile/Password";
import Transactions from "./Components/Pages/Profile/Transactions";
import Deactivate from "./Components/Pages/Profile/Deactivate";
import EditProfile from "./Components/Pages/Profile/EditProfile";
import NotFound from "./Components/Pages/NotFound";
import RegisteredSuccess from "./Components/Pages/RegisteredSuccess";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/account/:id/profile/edit"
          render={renderProps => (
            <Profile>
              <EditProfile />
            </Profile>
          )}
        />
        <Route
          exact
          path="/account/:id/deactivate"
          render={renderProps => (
            <Profile>
              <Deactivate />
            </Profile>
          )}
        />
        <Route
          exact
          path="/account/:id/transactions"
          render={renderProps => (
            <Profile>
              <Transactions />
            </Profile>
          )}
        />
        <Route
          exact
          path="/account/:id/profile"
          render={renderProps => (
            <Profile>
              <Account />
            </Profile>
          )}
        />
        <Route
          exact
          path="/account/:id/billing_info"
          render={renderProps => (
            <Profile>
              <Billing />
            </Profile>
          )}
        />
        <Route
          exact
          path="/account/:id/password"
          render={renderProps => (
            <Profile>
              <Password />
            </Profile>
          )}
        />

        <Route exact path="/become_tasker" component={BecomeTasker} />
        <Route
          exact
          path="/become_tasker/eligibility"
          render={renderProps => (
            <Dashboard>
              <TaskerDetail />
            </Dashboard>
          )}
        />
        <Route
          exact
          path="/become_tasker/categories"
          render={renderProps => (
            <Dashboard>
              <Categories />
            </Dashboard>
          )}
        />
        <Route
          exact
          path="/become_tasker/success"
          render={renderProps => (
            <Dashboard>
              <RegisteredSuccess />
            </Dashboard>
          )}
        />
        <Route
          exact
          path="/dashboard/form"
          render={renderProps => (
            <Booking>
              <BookingForm />
            </Booking>
          )}
        />
        <Route
          exact
          path="/dashboard/confirm"
          render={renderProps => (
            <Booking>
              <Confirm />
            </Booking>
          )}
        />
        <Route
          exact
          path="/dashboard/recommend"
          render={renderProps => (
            <Booking>
              <Taskers />
            </Booking>
          )}
        />
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
        <Route exact path="/signup" component={Register} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
