import React from "react";
import { Switch, Route } from "react-router-dom";
import { Signup } from "./Signup";
import Login from "./Login/Login";

const App = props => {
  // console.log(props);
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default App;
