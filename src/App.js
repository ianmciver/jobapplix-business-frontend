import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import CreatePositionContainer from "./components/Position/CreatePositionContainer";
import PositionContext from "./components/Position/PositionContext";
import SignUpContainer from "./components/SignUp/SignUpContainer";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <div id="content">
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUpContainer} />
          <Route
            path="/createposition"
            render={props => (
              <PositionContext>
                <CreatePositionContainer {...props} />
              </PositionContext>
            )}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
