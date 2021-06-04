import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Routing
import PrivateRoute from "./components/routing/PrivateRoute";
import NavBar from "./components/Navbar";
import ForgotPassword from "./components/auth/ForgotPassword";
import PasswordReset from "./components/auth/PasswordReset";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import Rated from "./components/pages/Rated";
import Popular from "./components/pages/Popular";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/info" component={User} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/rated" component={Rated} />
            <Route exact path="/popular" component={Popular} />
            <Route
              exact
              path="/passwordreset/:resetToken"
              component={PasswordReset}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
