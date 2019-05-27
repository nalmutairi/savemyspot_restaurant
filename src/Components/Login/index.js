import React, { Component } from "react";
import { Redirect } from "react-router";

import authStore from "../../Stores/authStore";
import LoginForm from "../../Forms/LoginForm";

class Login extends Component {
  render() {
    if (authStore.restaurantid) {
      return <Redirect to="/queue/" />;
    } else {
      return (
        <div>
          <LoginForm history={this.props.history} />
        </div>
      );
    }
  }
}
export default Login;
