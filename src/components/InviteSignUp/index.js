import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { createUserFromPending } from "../../actions/businessUserActions";
import { API_URL } from "../../constants/urls";
import Loading from "../Dashboard/Loading";
import Header from "../Header";
import { TextInput } from "../../styles/forms";
import { NextButton } from "../SignUp/SignUpContainer/styles";
import { dashboard } from "../../constants/routes";

import { withFirebase } from "../../Firebase";

import {
  Container,
  WelcomeHeader,
  BusinessLogo,
  Description,
  FormContainer,
  PasswordInput
} from "./styles";

// app.jobapplix.com/invitesignup/:id
function InviteSignUp(props) {
  const [loading, setLoading] = useState(true); //loading
  const [businessName, setbusinessName] = useState(""); //business name
  const [businessLogo, setbusinessLogo] = useState(""); //business name
  const [email, setEmail] = useState(""); //email
  const [id, setId] = useState(""); //id
  const [role, setRole] = useState(""); //role

  const [name, setName] = useState(""); //name
  const [title, setTitle] = useState(""); //title
  const [password, setPassword] = useState(""); //password
  const [confirmPassword, setConfirmPassword] = useState(""); //password confirm
  const [passMatch, setPassMatch] = useState(true);
  const [passLength, setPassLength] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/businesses/pendinguser?id=${props.match.params.id}`)
      .then(({ data }) => {
        if (data === "") {
          setError(
            "Sorry, it looks like this link is invalid. If you clicked a link from your email it may have expired. Please contact your JobApplix aministrator to generate a new link."
          );
          setLoading(false);
        } else {
          setbusinessName(data.name);
          setEmail(data.email);
          setbusinessLogo(data.image_url);
          setRole(data.role);
          setId(data.id);
          setLoading(false);
        }
      });
  }, []);

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
        props.createUserFromPending(email, name, title, id, () =>
          props.history.push(`${dashboard}`)
        );
      })
      .catch(err => {
        setError(err.message);
      });
  };
  return (
    <>
      {loading && <Loading />}
      <Header />
      <Container>
        <WelcomeHeader>Welcome!</WelcomeHeader>
        <BusinessLogo src={businessLogo} alt={`${businessName} logo`} />
        <Description>
          You have been invited to {businessName}'s JobApplix group. Complete
          your account details here to join the group.
        </Description>
        <FormContainer>
          <TextInput
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="YOUR FULL NAME*"
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
          <NextButton disabled={buttonDisabled} onClick={createFirebaseUser}>
            COMPLETE SIGN UP
          </NextButton>
          {passMatch ? null : (
            <p className="no-match">Passwords do not match</p>
          )}
          {passLength ? null : (
            <p className="no-match">
              Password must be at least 6 characters long.
            </p>
          )}
        </FormContainer>
      </Container>
    </>
  );
}

export default connect(
  null,
  { createUserFromPending }
)(withFirebase(InviteSignUp));
