import React, {Component} from 'react';
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
      <MenuButton handleMouseDown={this.handleMouseDown}/>
      <Menu handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible} />
        <div>
          <p>Найди пункт, который лишний:</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuContainer;
