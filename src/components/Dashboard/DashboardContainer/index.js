import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import PositionContext from "../Position/PositionContext";
import { FirebaseContext } from "../../../Firebase";

import ApplicationsContainer from "../ApplicationsContainer";
import CreatePositionContainer from "../Position/CreatePositionContainer";
import PositionsList from "../PositionsList";

import TopBar from "../TopBar";
import Loading from "../Loading";
import UserMenu from "../Menus/UserMenu";
import BusinessMenu from "../Menus/BusinessMenu";

import {
  dashboard,
  createPosition,
  applications,
  positionsList
} from "../../../constants/routes";
import isLoggedIn from "../../../helpers/isLoggedIn";

import DashboardProvider from "../DashboardContext";

import { DashboardBody } from "./styles";
import {
  getBusinessSummary,
  startLoadingScreen
} from "../../../actions/businessActions";

function DashboardContainer(props) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const firebase = useContext(FirebaseContext);
  useEffect(() => {
    firebase.doSetInitializationListener(() => setFirebaseInitialized(true));
  }, []);

  useEffect(() => {
    if (firebaseInitialized) {
      isLoggedIn().then(loggedIn => {
        if (loggedIn) {
          props.getBusinessSummary();
        } else {
          props.history.replace("/signin");
        }
      });
    }
  }, [firebaseInitialized]);
  return (
    <>
      {props.businessUser.loading ? (
        <Loading />
      ) : (
        <DashboardProvider>
          <UserMenu />
          <BusinessMenu />
          <TopBar />
          <DashboardBody>
            {/* <Route path={dashboard} component={Header} /> */}
            <Route
              path={`${dashboard}${createPosition}`}
              render={props => (
                <PositionContext>
                  <CreatePositionContainer {...props} />
                </PositionContext>
              )}
            />
            <Route
              path={`${dashboard}${applications}`}
              component={ApplicationsContainer}
            />
            <Route
              path={`${dashboard}${positionsList}`}
              component={PositionsList}
            />
          </DashboardBody>
        </DashboardProvider>
      )}
    </>
  );
}

export default connect(
  state => ({ businessUser: state.businessUser }),
  { getBusinessSummary, startLoadingScreen }
)(DashboardContainer);
