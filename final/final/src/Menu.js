import React, {Component} from "react";
import MenuButton from "./MenuButton";
import MenuContainer from "./MenuContainer";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible:!this.state.visible
    });
  }
  render() {
    return (
      <div>
        <h2>Menu is here!!!</h2>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <MenuContainer handleMouseDown={this.handleMouseDown}
                      menuVisibility={this.state.visible}/>
      </div>
    );
  }
}

export default Menu;
