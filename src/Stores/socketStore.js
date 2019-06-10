import socketIOClient from "socket.io-client";

class SocketStore {
  constructor() {
    this.socket = socketIOClient("https://savemyspot-node.codeunicorn.io/");
  }
  restaurantSignIn(restaurantID) {
    this.socket.emit("restaurant request", restaurantID);
  }
  seatGuest(queueID) {
    this.socket.emit("seat guest", queueID);
  }
}

export default new SocketStore();
