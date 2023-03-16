import React, {Component} from 'react';
import "./todoItems.css";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <span key={item.key}>{item.text}</span>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return(
      <div className="todoList">
        {listItems}
      </div>
    );
  }
}

export default TodoItems;
