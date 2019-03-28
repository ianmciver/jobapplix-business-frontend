import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { PasswordInput } from "./styles";
import { NextButton } from "../SignUpContainer/styles";
import { TextInput } from "../../../styles/forms";
import { SignUpCTA } from "../../SignIn/styles";

import { withFirebase } from "../../../Firebase";

import { createUser } from "../../../actions/businessUserActions";

function UserSignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passMatch, setPassMatch] = useState(true);
  const [passLength, setPassLength] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (password !== confirmPassword) {
      setPassMatch(false);
    } else {
      setPassMatch(true);
    }
    return () => {
      setPassMatch(true);
    };
  }, [confirmPassword, password]);

  useEffect(() => {
    if (password.length > 5) {
      setPassLength(true);
    } else {
      setPassMatch(true);
    }
    return () => {
      setPassLength(false);
    };
  }, [password]);

  useEffect(() => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      passMatch &&
      passLength
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  });

  const createFirebaseUser = e => {
    e.preventDefault();
    props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        props.createUser(email, name, title, props.next);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <>
      <h1 className="headline">CREATE AN ADMIN ACCOUNT</h1>
      <span className="step">Step 1:</span>
      <span>
        Create an admin account that will have full access to your business. You
        can invite other users later.
      </span>
      <span>Note: this will be your own personal account.</span>
      <TextInput
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="FULL NAME*"
      />
      <TextInput
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="EMAIL*"
      />
      <TextInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="YOUR TITLE"
      />
      <PasswordInput
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="PASSWORD*"
        type="password"
        match={passMatch}
      />
      <PasswordInput
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder="CONFIRM PASSWORD*"
        type="password"
        match={passMatch}
      />
      {passMatch ? null : (
        <span className="no-match">Passwords do not match</span>
      )}
      {passLength ? null : (
        <span className="no-match">
          Password must be at least 6 characters long.
        </span>
      )}
      {error ? <span className="no-match">{error}</span> : null}
      {/* <NextButton disabled={buttonDisabled} onClick={props.next}> */}
      <NextButton disabled={buttonDisabled} onClick={createFirebaseUser}>
        NEXT STEP
      </NextButton>
      <SignUpCTA>
        Already have an account? <Link to="/signin">Sign in now!</Link>
      </SignUpCTA>
    </>
  );
}

export default connect(
  null,
  { createUser }
)(withFirebase(UserSignUp));
