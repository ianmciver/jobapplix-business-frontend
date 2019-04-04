import React, { useState, useContext } from "react";
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
  ErrorText
} from "./styles";
import { TextInput } from "../../styles/forms";
import Header from "../Header";
import Footer from "../Footer";
import { fetchUser } from "../../actions/businessUserActions";
import { getBusinessSummary } from "../../actions/businessActions";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const firebase = useContext(FirebaseContext);

  const signIn = () => {
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        props.history.push(dashboard);
        props.fetchUser();
        props.getBusinessSummary();
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
    <>
      <Header />
      <SignInContainer>
        <h1>SIGN IN</h1>
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
        {error && <ErrorText>{error}</ErrorText>}
        <CheckboxContainer>
          <Checkbox checked={remember} onClick={e => setRemember(!remember)} />
          <span>Remember Me</span>
        </CheckboxContainer>
        <SignInButton padding="7px 14px" onClick={signIn}>
          SIGN IN
        </SignInButton>
        <SignUpCTA>
          Dont' have an account? <Link to="/signup">Sign up now!</Link>
        </SignUpCTA>
      </SignInContainer>
      <Footer />
    </>
  );
}

export default connect(
  null,
  { fetchUser, getBusinessSummary }
)(SignIn);
