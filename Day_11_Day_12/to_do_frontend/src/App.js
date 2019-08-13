import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Detail from "./components/Detail";
import Update from "./components/Update";
import List from "./components/List";

function App() {
  return (
    <div>
       <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
            <NavLink to="/create/" className="nav-item nav-link">Create</NavLink>
            <NavLink to="/list" className="nav-item nav-link">List</NavLink>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/create/" exact component={Create} />
        <Route path="/list/" exact component={List} />
        <Route path="/detail/:id" exact component={Detail} />

      </Router>
    </div>
  );
}

export default App;
