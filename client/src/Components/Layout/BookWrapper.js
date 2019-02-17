import React from "react";
import Booking from "../Pages/Booking";
import BookingForm from "../Ui/Accordion/BookingForm";
import { Switch, Route } from "react-router-dom";

const BookWrapper = props => {
  return (
    <Booking>
      <Switch>
        <Route exact path={`${props.match.path}/form`} render={BookingForm} />
        <Route
          exact
          path={`${props.match.path}/recommend`}
          render={renderProps => <h1>Recommend</h1>}
        />
      </Switch>
    </Booking>
  );
};

export default BookWrapper;
