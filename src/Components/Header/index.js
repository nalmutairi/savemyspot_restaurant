import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

import { Container, Navbar, Nav } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

//Stores
import authStore from "../../Stores/authStore";

class Header extends Component {
  componentDidMount() {
    authStore.getRestaurantDetails(authStore.restaurant);
  }

  getJumbotron() {
    if (authStore.restaurantid && authStore.restaurantid.data) {
      return (
        <Jumbotron fluid>
          <Container>
            <h1>{authStore.restaurantid.data.name}</h1>
            <p>{authStore.restaurantid.data.description}</p>
          </Container>
        </Jumbotron>
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
                <Nav.Link>Hello, {authStore.user.username}</Nav.Link>
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

export default withRouter(observer(Header));
