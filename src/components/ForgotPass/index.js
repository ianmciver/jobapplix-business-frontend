import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { API_URL } from "../../constants/urls";

import { FirebaseContext } from "../../Firebase";
// import { dashboard } from "../../constants/routes";
import {
  SignInContainer,
  SignInButton,
  SignUpCTA,
  ErrorText,
  AppContainer,
  SignInCard
} from "./styles";
import { TextInput } from "../../styles/forms";
import Header from "../Header";
import Footer from "../Footer";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);
  const firebase = useContext(FirebaseContext);

  const sendEmail = async () => {
    let newUUID = await axios.get(
      `${API_URL}/businesses/userreset?email=${email}`
    );
    firebase
      .doPasswordReset(email, {
        url: `http://localhost:3000/resetpass/${newUUID}`
      })
      .then(res => {
        setComplete(true);
      })
      .catch(err => {
        setError("There is no user associated with this email address");
      });
  };

  const keyPressHandler = e => {
    if (e.key === "Enter") {
      sendEmail();
    } else {
      return;
    }
  };

  return (
    <AppContainer>
      <Header />
      <SignInContainer>
        <SignInCard>
          {complete ? (
            <>
              <h1>RESET EMAIL SENT</h1>
              <SignUpCTA>
                Once you have reset your password, click here to{" "}
                <Link to="/signin">Sign In</Link>
              </SignUpCTA>
            </>
          ) : (
            <>
              <h1>FORGOT PASSWORD</h1>
              <TextInput
                placeholder="EMAIL"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={!!error}
                onKeyPress={keyPressHandler}
              />
              {error && <ErrorText>{error}</ErrorText>}
              <SignInButton padding="7px 14px" onClick={sendEmail}>
                RESET PASSWORD
              </SignInButton>
              <SignUpCTA>
                Dont' have an account? <Link to="/signup">Sign up now!</Link>
              </SignUpCTA>
            </>
          )}
        </SignInCard>
      </SignInContainer>
      <Footer />
    </AppContainer>
  );
}

export default connect(
  null,
  {}
)(SignIn);
