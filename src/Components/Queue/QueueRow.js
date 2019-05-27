import React, { Component } from "react";

import socket from "../../Stores/socketStore";

class QueueRow extends Component {
  render() {
    const { queue } = this.props;
    return (
      <tr style={{ borderBottom: "1px solid black" }}>
        <td style={{ color: "white" }}>{queue.position}</td>
        <td style={{ color: "white" }}>
          {queue.user.first_name} {queue.user.last_name}
        </td>
        <td style={{ color: "white" }}>{queue.guests}</td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => socket.seatGuest(queue.id)}
          >
            Seat
          </button>
        </td>
      </tr>
    );
  }
}

export default QueueRow;
