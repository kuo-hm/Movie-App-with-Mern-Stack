import React from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PriavteScreen from "./components/auth/PriavteScreen";
import ForgotPassword from "./components/auth/ForgotPassword";
import PasswordReset from "./components/auth/PasswordReset";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Routing
import PrivateRoute from "./components/routing/PrivateRoute";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/info" component={PriavteScreen} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
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
