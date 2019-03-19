import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logout_user, upload_photo } from "../../../actions/userActions";

class Account extends Component {
  state = {
    imageURL: ""
  };
  logoutUser = e => {
    this.props.dispatch(logout_user()).then(response => {
      this.props.history.push("/");
    });
  };

  fileInput = e => {
    const image = e.target.files[0];
    const reader = new FileReader();
    let imageURL = "";
    reader.onload = event => {
      this.setState(
        {
          imageURL: event.target.result
        },
        () => {
          console.log(this.state.imageURL);
          this.props.dispatch(
            upload_photo(event.target.result, this.props.user.basic_info._id)
          );
        }
      );
    };
    reader.readAsDataURL(image);
  };

  render() {
    return (
      <div className="profile__wrapper--component__profile">
        <div className="profile__wrapper--component__profile--headline">
          <h1>Account</h1>
          <Link
            to={`/account/${this.props.user.basic_info._id}/profile/edit`}
            className="button"
          >
            <button>Edit</button>
          </Link>
        </div>
        <div className="profile__wrapper--component__profile--details">
          <div className="upload">
            <img src={this.props.user.basic_info.image} />
            <input
              type="file"
              style={{ display: "none" }}
              onChange={e => this.fileInput(e)}
              ref={file => (this.fileRef = file)}
            />
            <p onClick={e => this.fileRef.click()}>Add profile image</p>
          </div>
          <ul>
            <li>
              <i class="fas fa-user-alt" />
              <h2>
                {this.props.user.basic_info.first_name}{" "}
                {this.props.user.basic_info.last_name}
              </h2>
            </li>
            <li>
              <i class="fas fa-envelope" />
              <h2>{this.props.user.basic_info.email}</h2>
            </li>
            <li>
              <i class="fas fa-map-marker-alt" />
              <h2>{this.props.user.basic_info.postcode}</h2>
            </li>
            <li>
              <div className="button" onClick={e => this.logoutUser(e)}>
                <button>Log out</button>
              </div>
            </li>
          </ul>
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

export default connect(mapStateToProps)(withRouter(Account));
