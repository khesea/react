import React, {Component} from "react";
import {
  Routes,
  NavLink,
  BrowserRouter,
  Route
} from "react-router-dom";
import Hello from "./Hello";
import TodoListContainer from "./TodoListContainer";
import Menu from "./Menu";
import Thanks from "./Thanks"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Простое SPA-приложение, резюмирующее книгу Кирупы</h1>
          <ul className="header">
            <li><NavLink to="/">hello</NavLink></li>
            <li><NavLink to="/todoList">to-do list</NavLink></li>
            <li><NavLink to="/menu">menu</NavLink></li>
            <li><NavLink to="/thanks">thanks</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" Component={Hello} />
              <Route path="/todoList" Component={TodoListContainer} />
              <Route path="/menu" Component={Menu} />
              <Route path="/thanks" Component={Thanks} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
