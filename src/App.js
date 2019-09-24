import React from "react";
import { Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import InviteSignUp from "./components/InviteSignUp";
import ForgotPass from "./components/ForgotPass";

import {
  signin,
  signup,
  forgotPass,
  dashboard,
  inviteSignUp
} from "./constants/routes";

function App(props) {
  return (
    <div>
      <Route path={"/"} exact component={SignIn} />
      <Route path={signin} component={SignIn} />
      <Route path={forgotPass} component={ForgotPass} />
      <Route path={signup} component={SignUpContainer} />
      <Route path={dashboard} component={DashboardContainer} />
      <Route path={`${inviteSignUp}/:id`} component={InviteSignUp} />
    </div>
  );
}

export default App;
