import React, {Component} from 'react';

class TodoList extends Component{
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);

  }

  addItem(e) {
    var itemArray = this.state.items;
    if (this._inputText.value !== "") {
      itemArray.unshift({
        text: this._inputText.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputText.value = "";
    }

    console.log(itemArray);
    e.preventDefault();
  }

  render() {
    return (
      <div className="main">
        <div className="formField">
          <form onSubmit={this.addItem}>
            <input
            ref = {(a) => this._inputText = a}
            placeholder="Введите дело"></input>
            <button type="submit">добавить</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
