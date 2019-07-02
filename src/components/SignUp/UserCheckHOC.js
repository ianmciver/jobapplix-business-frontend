import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import FirebaseContext from "../../Firebase/context";

import isLoggedIn from "../../helpers/isLoggedIn";

const UserCheckHOC = props => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const firebase = useContext(FirebaseContext);
  useEffect(() => {
    firebase.doSetInitializationListener(() => setFirebaseInitialized(true));
  }, []);

  useEffect(() => {
    if (firebaseInitialized) {
      isLoggedIn().then(loggedIn => {
        if (!loggedIn) {
          props.history.replace("/signup");
        }
      });
    }
  }, [firebaseInitialized]);

  return <>{props.children}</>;
};

export default withRouter(UserCheckHOC);
