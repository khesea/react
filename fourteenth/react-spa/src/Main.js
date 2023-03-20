import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contacts from "./Contacts";

class Main extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <h1>Простое SPA-приложение</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Products</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/stuff" Component={Stuff} />
              <Route path="/contacts" Component={Contacts} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
