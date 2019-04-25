import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import PositionContext from "../Position/PositionContext";
import ShiftTimesContext from "../Position/ShiftTimesContext";
import { FirebaseContext } from "../../../Firebase";

import ApplicationsContainer from "../ApplicationsContainer";
import CreatePositionContainer from "../Position/CreatePositionContainer";
import UpdatePositionContainer from "../Position/UpdatePositionContainer";
import PositionsList from "../PositionsList";
import UsersList from "../UsersList";
import InviteUser from "../InviteUser";
import TopBar from "../TopBar";
import Loading from "../Loading";
import UserMenu from "../Menus/UserMenu";
import BusinessMenu from "../Menus/BusinessMenu";
import BusinessProfile from "../BusinessProfile";

import {
  dashboard,
  createPosition,
  applications,
  positionsList,
  usersList,
  updatePositionUrl,
  inviteUserUrl,
  businessProfile
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
            <Route
              path={`${dashboard}${createPosition}`}
              render={props => (
                <ShiftTimesContext>
                  <PositionContext>
                    <CreatePositionContainer {...props} />
                  </PositionContext>
                </ShiftTimesContext>
              )}
            />
            <Route
              path={`${dashboard}${updatePositionUrl}/:id`}
              render={props => (
                <ShiftTimesContext>
                  <PositionContext>
                    <UpdatePositionContainer {...props} />
                  </PositionContext>
                </ShiftTimesContext>
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
            <Route path={`${dashboard}${usersList}`} component={UsersList} />
            <Route
              path={`${dashboard}${inviteUserUrl}`}
              component={InviteUser}
            />
            <Route
              path={`${dashboard}${businessProfile}`}
              component={BusinessProfile}
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
