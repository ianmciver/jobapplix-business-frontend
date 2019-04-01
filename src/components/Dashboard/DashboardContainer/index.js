import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import { withFirebase } from "../../../Firebase/context";
// import { firebase } from "../../../index";

import TopBar from "../TopBar";
import CreatePositionContainer from "../Position/CreatePositionContainer";
import PositionContext from "../Position/PositionContext";

import { FirebaseContext } from "../../../Firebase";
import Header from "../Header";
import Loading from "../Loading";
import { dashboard, createPosition } from "../../../constants/routes";
import isLoggedIn from "../../../helpers/isLoggedIn";
import { DashboardBody } from "./styles";

function DashboardContainer(props) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const firebase = useContext(FirebaseContext);
  useEffect(() => {
    firebase.doSetInitializationListener(() => setFirebaseInitialized(true));
  }, []);

  useEffect(() => {
    if (firebaseInitialized) {
      if (!isLoggedIn()) {
        props.history.replace("/signin");
      }
    }
  }, [firebaseInitialized]);

  return (
    <>
      {props.businessUser.loading ? (
        <Loading />
      ) : (
        <>
          <TopBar />
          <DashboardBody>
            <Route path={dashboard} component={Header} />
            <Route
              path={`${dashboard}${createPosition}`}
              render={props => (
                <PositionContext>
                  <CreatePositionContainer {...props} />
                </PositionContext>
              )}
            />
          </DashboardBody>
        </>
      )}
    </>
  );
}

export default connect(state => ({ businessUser: state.businessUser }))(
  DashboardContainer
);
