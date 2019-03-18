import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { save_edit } from "../../../actions/userActions";

class EditProfile extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    postcode: "",
    error: {}
  };

  componentDidMount() {
    this.setState({
      first_name: this.props.user.basic_info.first_name,
      last_name: this.props.user.basic_info.last_name,
      email: this.props.user.basic_info.email,
      postcode: this.props.user.basic_info.postcode
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  removeError = (e, err) => {
    const errors = { ...this.state.error };

    delete errors[err];
    this.setState({
      error: errors
    });
  };

  saveEdit = e => {
    e.preventDefault();
    let errList = {};
    for (let el in this.state) {
      if (this.state[el].length === 0) {
        switch (el) {
          case "first_name":
            errList[el] = `First name must not be blank`;
            break;
          case "last_name":
            errList[el] = `Last name must not be blank`;
            break;
          case "email":
            errList[el] = `Email must not be blank`;
            break;
          case "postcode":
            errList[el] = `Postcode must not be blank`;
            break;
        }
      }
    }

    if (Object.keys(errList).length > 0) {
      this.setState({
        error: errList
      });
    } else {
      const newData = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        postcode: this.state.postcode
      };
      this.props
        .dispatch(save_edit(newData, this.props.user.basic_info._id))
        .then(response => {
          if (response.payload.edit) {
            this.props.history.push(
              `/account/${this.props.user.basic_info._id}/profile`
            );
          }
        });
    }
  };

  render() {
    return (
      <div className="profile__wrapper--component__profile">
        <div className="profile__wrapper--component__profile--headline">
          <h1>Edit Account</h1>
        </div>
        <div className="profile__wrapper--component__profile--details">
          <img src="/images/user.png" />
          <form className="profile__wrapper--component__profile--form">
            <label>
              <p>First Name</p>
              <input
                type="text"
                name="first_name"
                onChange={e => this.onChange(e)}
                value={this.state.first_name}
              />
              <span
                className="errorSpan"
                style={{
                  display: !this.state.error.first_name ? "none" : "flex"
                }}
              >
                {this.state.error.first_name}
                <span
                  className="close"
                  onClick={e => this.removeError(e, "first_name")}
                >
                  &#11199;
                </span>
              </span>
            </label>
            <label id="second_column">
              <p>Last Name</p>
              <input
                type="text"
                name="last_name"
                onChange={e => this.onChange(e)}
                value={this.state.last_name}
              />
              <span
                className="errorSpan"
                style={{
                  display: !this.state.error.last_name ? "none" : "flex"
                }}
              >
                {this.state.error.last_name}
                <span
                  className="close"
                  onClick={e => this.removeError(e, "last_name")}
                >
                  &#11199;
                </span>
              </span>
            </label>
            <label>
              <p>Email</p>
              <input
                type="text"
                name="email"
                onChange={e => this.onChange(e)}
                value={this.state.email}
              />
              <span
                className="errorSpan"
                style={{
                  display: !this.state.error.email ? "none" : "flex"
                }}
              >
                {this.state.error.email}
                <span
                  className="close"
                  onClick={e => this.removeError(e, "email")}
                >
                  &#11199;
                </span>
              </span>
            </label>

            <label>
              <p>Postcode</p>
              <input
                type="text"
                name="postcode"
                onChange={e => this.onChange(e)}
                value={this.state.postcode}
              />
              <span
                className="errorSpan"
                style={{
                  display: !this.state.error.postcode ? "none" : "flex"
                }}
              >
                {this.state.error.postcode}
                <span
                  className="close"
                  onClick={e => this.removeError(e, "postcode")}
                >
                  &#11199;
                </span>
              </span>
            </label>
            <div className="buttons">
              <Link
                to={`/account/${this.props.user.basic_info._id}/profile`}
                className="button cancel"
              >
                <button>Cancel</button>
              </Link>
              <div className="button save" onClick={e => this.saveEdit(e)}>
                <button>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(withRouter(EditProfile));
