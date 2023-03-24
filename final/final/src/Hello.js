import React, {Component} from "react";
import "./Hello.css";

class Hello extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="static-txt">Hi</div>
        <ul className="dynamic-txts">
          <li><span>Bitches</span></li>
          <li><span>Girls</span></li>
          <li><span>Cuties</span></li>
          <li><span>Taties</span></li>
        </ul>
      </div>
    );
  }
}

export default Hello;
