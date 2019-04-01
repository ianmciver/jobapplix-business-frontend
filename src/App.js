import React from "react";
import { Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import SignUpContainer from "./components/SignUp/SignUpContainer";

import { signin, signup, dashboard } from "./constants/routes";

function App(props) {
  return (
    <div id="App">
      <div id="content">
        <Route path={signin} component={SignIn} />
        <Route path={signup} component={SignUpContainer} />
        <Route path={dashboard} component={DashboardContainer} />
      </div>
    </div>
  );
}

export default App;
