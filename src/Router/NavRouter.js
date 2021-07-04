import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import LifeCycle from "./LifeCycle";
import Protected from "./Protected";
import Unprotected from "./Unprotected";
import GuardedRoute from "./GuardedRoute";
import LoginForm from "./LoginForm";
import ReduxComp from "../ReduxComp";
import PureJs from "./PureJs";

const NavRouter = () => {
  const [isAutheticated, setIsAutheticated] = useState(
    JSON.parse(sessionStorage.getItem("isAutheticated")) || false
  );
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [erroMsg, setErroMsg] = useState({});
  const login = () => {
    let user = uname;
    let pass = password;
    if (user === "admin" && pass === "admin") {
      setIsAutheticated(true);
      sessionStorage.setItem("isAutheticated", true);
      setErroMsg({ type: "success", msg: "Login Success!!" });
      setTimeout(() => {
        document.getElementById("id01").style.display = "none";
        setErroMsg({});
      }, 2000);
    } else {
      setErroMsg({ type: "danger", msg: "Login Failed!!" });
    }
    console.log("loggedInUser:" + isAutheticated);
  };
  const logout = () => {
    setIsAutheticated(false);
    sessionStorage.removeItem("isAutheticated");
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
              {rest.icon && (
                <i
                  className={`fas fa ${
                    rest.locakIcon ? "fa-unlock" : "fa-lock"
                  } mr-2`}
                />
              )}
              {rest.linkText}
            </Link>
          </li>
        )}
      />
    );
  };
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
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
                <ListItemLink to="/lifecycle" linkText="LifeCycle" />
                <ListItemLink to="/purejs" linkText="PureJs" />
                <ListItemLink
                  to="/protected"
                  linkText={`Protected`}
                  locakIcon={isAutheticated}
                  icon="lock"
                />
                <ListItemLink
                  to="/unprotected"
                  linkText={`Unprotected`}
                  locakIcon={isAutheticated}
                  icon="lock"
                />
                <ListItemLink to="/redux-comp" linkText="Redux Comp" />
              </ul>
              <form className="form-inline">
                {!isAutheticated && (
                  <input
                    type="button"
                    className={`btn btn-outline-primary${
                      isAutheticated ? " active" : ""
                    }`}
                    onClick={() =>
                      (document.getElementById("id01").style.display = "block")
                    }
                    value="Login"
                  />
                )}
                {isAutheticated && (
                  <input
                    type="button"
                    className={`btn btn-outline-danger ml-1${
                      !isAutheticated ? " active" : ""
                    }`}
                    onClick={logout}
                    value="Logout"
                  />
                )}
              </form>
            </div>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lifecycle" component={LifeCycle} />
            <Route exact path="/purejs" component={PureJs} />
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
        </div>
      </Router>
      <LoginForm
        setUname={setUname}
        setPassword={setPassword}
        login={login}
        erroMsg={erroMsg}
      />
    </>
  );
};

export default NavRouter;
