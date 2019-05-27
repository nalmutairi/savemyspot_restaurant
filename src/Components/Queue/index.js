import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import QueueRow from "./QueueRow";

//Stores
import socketStore from "../../Stores/socketStore";
import authStore from "../../Stores/authStore";

class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: []
    };
  }

  componentDidMount() {
    socketStore.restaurantSignIn(authStore.restaurant);
    socketStore.socket.on("restaurantQ", data => {
      this.setState({ restaurant: data, queue: data.queue });
    });
  }

  render() {
    if (authStore.restaurant === null) {
      return <Redirect to="/login/" />;
    }
    let { queue } = this.state;
    let QueueList;
    if (queue) {
      queue = queue.reverse();
      QueueList = queue.map(queue => <QueueRow key={queue.id} queue={queue} />);
    }
    console.log("load", authStore.user, authStore.restaurantid);
    if (!authStore.loading) {
      console.log("not loading");

      console.log("I AM THIS PERSON", authStore.restaurantid);
      return (
        <div style={{ marginTop: 50 }} className="row center">
          <table className="col-12 ">
            <thead style={{ backgroundColor: "rgb(81,39,82)" }}>
              <tr style={{ borderBottom: "5px solid rgb(81,39,82)" }}>
                <th style={{ color: "white" }}>Position</th>
                <th style={{ color: "white" }}>Name</th>
                <th style={{ color: "white" }}># of Guests</th>
                <th style={{ color: "white" }}>Seat</th>
              </tr>
            </thead>
            <tbody>{QueueList}</tbody>
          </table>
        </div>
      );
    } else {
      console.log("STILL LAODING");
      return <div />;
    }
  }
}

export default observer(Queue);
