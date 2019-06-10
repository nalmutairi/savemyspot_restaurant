import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

import { Navbar, Nav } from "react-bootstrap";

//Stores
import authStore from "../../Stores/authStore";

class Header extends Component {
  componentDidMount() {
    authStore.getRestaurantDetails(authStore.restaurant);
  }

  getJumbotron() {
    if (authStore.restaurantid && authStore.restaurantid.data) {
      return (
        <div style={{ position: "relative" }} className="row text-center">
          <img
            alt="restaurant"
            className="img-responsive"
            src={authStore.restaurantid.data.picture}
            style={jumboImg}
          />
          <div style={titlePos}>
            <h1 style={title}>{authStore.restaurantid.data.name}</h1>
            <p style={desc}>{authStore.restaurantid.data.description}</p>
          </div>
        </div>
      );
    }
  }
  getHeaderView() {
    if (authStore.user) {
      return (
        <>
          <Navbar bg="light">
            <Navbar.Brand href="#home">Save My Spot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link onClick={() => authStore.logout(this.props.history)}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {this.getJumbotron()}
        </>
      );
    } else {
      return (
        <Navbar bg="light">
          <Navbar.Brand href="#home">Save My Spot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/login/">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }

  render() {
    return this.getHeaderView();
  }
}

//Styles
const jumboImg = {
  height: 300,
  width: "100%",
  objectFit: "cover",
  opacity: 0.4
};

const titlePos = {
  position: "absolute",
  top: " 50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const title = {
  textShadow: "2px 2px black",
  fontSize: 80,
  fontWeight: "bold",
  color: "white"
};

const desc = { textShadow: "2px 2px black", fontSize: 20, color: "white" };

export default withRouter(observer(Header));
