import React from "react";
import { Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import InviteSignUp from "./components/InviteSignUp";

import { signin, signup, dashboard, inviteSignUp } from "./constants/routes";

function App(props) {
  return (
    <div id="App">
      <div id="content">
        <Route path={signin} component={SignIn} />
        <Route path={signup} component={SignUpContainer} />
        <Route path={dashboard} component={DashboardContainer} />
        <Route path={`${inviteSignUp}/:id`} component={InviteSignUp} />
      </div>
    </div>
  );
}

export default App;
