import React, { Component } from "react";

class Billing extends Component {
  renderOptions = type => {
    if (type === "month") {
      let options = [
        "January",
        "Febraury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return options.map(month => {
        return <option value={month}>{month}</option>;
      });
    } else {
      let options = [];
      for (let i = 2019; i <= 2050; i++) {
        options.push(i);
      }
      return options.map(year => {
        return <option value={year}>{year}</option>;
      });
    }
  };

  render() {
    return (
      <div className="profile__wrapper--component__billing">
        <div className="profile__wrapper--component__billing--headline">
          <h1>Edit billing info </h1>
        </div>
        <form className="profile__wrapper--component__billing--form">
          <label>
            <p>Card Number</p>
            <input type="text" name="card_number" />
          </label>
          <label>
            <p>Expiration Date</p>
            <div style={{ display: "flex" }}>
              <select style={{ padding: "1rem" }}>
                {this.renderOptions("month")}
              </select>
              <select style={{ padding: "1rem" }}>
                {this.renderOptions("year")}
              </select>
            </div>
          </label>
          <label>
            <p>Security Code</p>
            <input type="text" name="security_code" />
          </label>
          <label>
            <p>Postcode</p>
            <input type="text" name="postcode" />
          </label>
          <div className="buttons">
            <div className="button cancel">
              <button>Cancel</button>
            </div>
            <div className="button save">
              <button>Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Billing;
