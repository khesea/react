import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./Menu.css";

class MenuContainer extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
            onMouseDown={this.props.handleMouseDown}
            className={visibility}>
            <h2>просто текст</h2>
      </div>
    );
  }
}

export default MenuContainer;
