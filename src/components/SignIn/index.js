import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { FirebaseContext } from "../../Firebase";
import { dashboard } from "../../constants/routes";
import {
  SignInContainer,
  CheckboxContainer,
  Checkbox,
  SignInButton,
  SignUpCTA,
  ErrorText,
  AppContainer,
  SignInCard
} from "./styles";
import { TextInput } from "../../styles/forms";
import Header from "../Header";
import Footer from "../Footer";
import { fetchUser } from "../../actions/businessUserActions";
import { getBusinessSummary } from "../../actions/businessActions";

import { forgotPass, signup } from "../../constants/routes";
import isLoggedIn from "../../helpers/isLoggedIn";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const firebase = useContext(FirebaseContext);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    firebase.doSetInitializationListener(() => setFirebaseInitialized(true));
  }, []);

  useEffect(() => {
    if (firebaseInitialized && !props.businessUser.error) {
      isLoggedIn().then(loggedIn => {
        if (loggedIn) {
          props.history.replace(dashboard);
        }
      });
    }
  }, [firebaseInitialized]);

  const signIn = () => {
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        props.history.push(dashboard);
        props.fetchUser();
        props.getBusinessSummary(() => props.history.replace("/signin"));
      })
      .catch(err => {
        setError("Email or Password is incorrect");
        setEmail("");
        setPassword("");
      });
  };

  const keyPressHandler = e => {
    if (e.key === "Enter") {
      signIn();
    } else {
      return;
    }
  };

  return (
    <AppContainer>
      <Header />
      <SignInContainer>
        <SignInCard>
          <h1>SIGN IN</h1>
          {props.businessUser.error && (
            <ErrorText>
              Internal Error: We have encountered an error, please try again at
              another time.
            </ErrorText>
          )}
          {error && <ErrorText>{error}</ErrorText>}
          <TextInput
            placeholder="EMAIL"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={!!error}
            onKeyPress={keyPressHandler}
          />
          <TextInput
            placeholder="PASSWORD"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={!!error}
            onKeyPress={keyPressHandler}
          />
          <SignUpCTA>
            <Link to={forgotPass}>Forgot your password?</Link>
          </SignUpCTA>
          <CheckboxContainer>
            <Checkbox
              checked={remember}
              onClick={e => setRemember(!remember)}
            />
            <span>Remember Me</span>
          </CheckboxContainer>
          <SignInButton padding="7px 14px" onClick={signIn}>
            SIGN IN
          </SignInButton>
          <SignUpCTA>
            Dont' have an account? <Link to={signup}>Sign up now!</Link>
          </SignUpCTA>
        </SignInCard>
      </SignInContainer>
      <Footer />
    </AppContainer>
  );
}

export default connect(
  state => ({ businessUser: state.businessUser }),
  { fetchUser, getBusinessSummary }
)(SignIn);
