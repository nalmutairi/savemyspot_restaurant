import React, { Component } from "react";

import AuthStore from "../Stores/authStore";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    AuthStore.loginUser(this.state, this.props.history);
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="col-6 mx-auto">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  autoComplete="username"
                  className="form-control"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="Enter Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  autoComplete="current-password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  name="password"
                  onChange={this.handleChange}
                />
              </div>

              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-dark btn-block"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
