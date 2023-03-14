import React, {Component} from "react";
import "./IPAddress.css";

class IPAddress extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.ip}</h1>
        <p>(Вот я и вычислил тебя по IP, береги мамку!11!1!)</p>
      </div>
    );
  }
}

export default IPAddress;
