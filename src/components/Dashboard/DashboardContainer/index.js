import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Elements } from "react-stripe-elements";

import PositionContext from "../Position/PositionContext";
import ShiftTimesContext from "../Position/ShiftTimesContext";
import { FirebaseContext } from "../../../Firebase";

import IsActiveHOC from "../../../helpers/isActiveHOC";

import Home from "../Home";
import ApplicationsContainer from "../ApplicationsContainer";
import CreatePositionContainer from "../Position/CreatePositionContainer";
import UpdatePositionContainer from "../Position/UpdatePositionContainer";
import PositionsList from "../PositionsList";
import UsersList from "../UsersList";
import TopBar from "../TopBar";
import Loading from "../Loading";
import UserMenu from "../Menus/UserMenu";
import BusinessMenu from "../Menus/BusinessMenu";
import BusinessProfile from "../BusinessProfile";
import UserProfile from "../UserProfile";
import SubscriptionDetails from "../SubscriptionDetails";
import UpdatePayment from "../SubscriptionDetails/UpdateCard";
import ReinstateSubscription from "../ReactivateSubscription";

import {
  dashboard,
  createPosition,
  applications,
  positionsList,
  usersList,
  updatePositionUrl,
  businessProfile,
  userProfile,
  subscription,
  updatePayment,
  reinstateSub
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
          props.getBusinessSummary(() => props.history.replace("/signin"));
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
            <Route path={dashboard} exact component={Home} />
            <Route
              path={`${dashboard}${createPosition}`}
              render={props => (
                <IsActiveHOC>
                  <ShiftTimesContext>
                    <PositionContext>
                      <CreatePositionContainer {...props} />
                    </PositionContext>
                  </ShiftTimesContext>
                </IsActiveHOC>
              )}
            />
            <Route
              path={`${dashboard}${updatePositionUrl}/:id`}
              render={props => (
                <IsActiveHOC>
                  <ShiftTimesContext>
                    <PositionContext>
                      <UpdatePositionContainer {...props} />
                    </PositionContext>
                  </ShiftTimesContext>
                </IsActiveHOC>
              )}
            />
            <Route
              path={`${dashboard}${applications}`}
              component={ApplicationsContainer}
            />
            <Route
              path={`${dashboard}${positionsList}`}
              render={props => (
                <IsActiveHOC>
                  <PositionsList {...props} />
                </IsActiveHOC>
              )}
            />
            <Route
              path={`${dashboard}${usersList}`}
              render={props => (
                <IsActiveHOC>
                  <UsersList {...props} />
                </IsActiveHOC>
              )}
            />
            <Route
              path={`${dashboard}${businessProfile}`}
              render={props => (
                <IsActiveHOC>
                  <BusinessProfile {...props} />
                </IsActiveHOC>
              )}
            />
            <Route
              path={`${dashboard}${userProfile}`}
              component={UserProfile}
            />
            <Route
              path={`${dashboard}${subscription}`}
              render={props => (
                <IsActiveHOC>
                  <SubscriptionDetails {...props} />
                </IsActiveHOC>
              )}
            />
            <Route
              path={`${dashboard}${updatePayment}`}
              render={props => (
                <IsActiveHOC>
                  <Elements>
                    <UpdatePayment {...props} />
                  </Elements>
                </IsActiveHOC>
              )}
            />
            <Route
              path={`${dashboard}${reinstateSub}`}
              render={props => (
                <Elements>
                  <ReinstateSubscription {...props} />
                </Elements>
              )}
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
