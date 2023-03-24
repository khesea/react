import React, {Component} from "react";
import {
  HashRouter,
  NavLink,
  Routes,
  Route
} from "react-router-dom";
import Hello from "./Hello";
import TodoListContainer from "./TodoListContainer";
import Menu from "./Menu";
import Thanks from "./Thanks";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="mainHeader">Simple SPA-App</h1>
          <ul className="headerLinks">
            <li><NavLink to="/">hello</NavLink></li>
            <li><NavLink to="/todoList">to-do list</NavLink></li>
            <li><NavLink to="/menu">menu</NavLink></li>
            <li><NavLink to="/thanks">thanks</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" Component={Hello}/>
              <Route path="/todoList" Component={TodoListContainer}/>
              <Route path="/menu" Component={Menu}/>
              <Route path="/thanks" Component={Thanks}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
