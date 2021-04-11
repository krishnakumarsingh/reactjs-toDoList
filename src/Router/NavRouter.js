import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Protected from "./Protected";
import Unprotected from "./Unprotected";
import GuardedRoute from "./GuardedRoute";
import ReduxComp from "../ReduxComp";

const NavRouter = () => {
  const [isAutheticated, setIsAutheticated] = useState(
    JSON.parse(localStorage.getItem("isAutheticated")) || false
  );
  const login = () => {
    setIsAutheticated(true);
    localStorage.setItem("isAutheticated", true);
    console.log("loggedInUser:" + isAutheticated);
  };
  const logout = () => {
    setIsAutheticated(false);
    localStorage.removeItem("isAutheticated");
    console.log("loggedInUser:" + isAutheticated);
  };
  const ListItemLink = ({ to, ...rest }) => {
    return (
      <Route
        path={to}
        exact
        children={({ match }) => (
          <li className="nav-item">
            <Link to={to} className={`nav-link ${match ? "active" : ""}`}>
              {rest.linkText}
            </Link>
          </li>
        )}
      />
    );
  };
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <ListItemLink to="/" linkText="Home" />
            <ListItemLink to="/protected" linkText="Protected" />
            <ListItemLink to="/unprotected" linkText="Unprotected" />
            <ListItemLink to="/redux-comp" linkText="Redux Comp" />
          </ul>
          <form className="form-inline">
            <input
              type="button"
              className={`btn btn-outline-success${
                isAutheticated ? " active" : ""
              }`}
              onClick={login}
              value="Login"
            />
            <input
              type="button"
              className={`btn btn-outline-success ml-1${
                !isAutheticated ? " active" : ""
              }`}
              onClick={logout}
              value="Logout"
            />
          </form>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <GuardedRoute
          path="/protected"
          component={Protected}
          auth={isAutheticated}
        />
        <GuardedRoute
          path="/unprotected"
          component={Unprotected}
          auth={isAutheticated}
        />
        <Route exact path="/redux-comp" component={ReduxComp} />
      </Switch>
    </Router>
  );
};

export default NavRouter;
