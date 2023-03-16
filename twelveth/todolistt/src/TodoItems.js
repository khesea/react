import React, {Component} from 'react';
import "./todoItems.css";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <p onClick={() => this.delete(item.key)} key={item.key}>• {item.text}</p>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return(
      <div className="todoList">
        <FlipMove duration={450} easing="ease-out">
          {listItems}
        </FlipMove>
      </div>
    );
  }
}

export default TodoItems;
