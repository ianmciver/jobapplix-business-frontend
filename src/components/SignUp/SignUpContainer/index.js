import React, { useState } from "react";
import { Route } from "react-router-dom";

import UserSignUp from "../UserSignUp";
import BusinessBasics from "../BusinessBasics";
import BusinessDescription from "../BusinessDescription";
import BusinessPayment from "../BusinessPayment";
import BusinessLogo from "../BusinessLogo";
import SignUpComplete from "../SignUpComplete";

import { Container } from "./styles";

export default function SignUpContainer(props) {
  const [step, setStep] = useState(1);

  const nextScreen = () => {
    setStep(step + 1);
    props.history.push(`/signup/${step}`);
  };

  return (
    <Container>
      <Route
        exact
        path="/signup/"
        render={props => <UserSignUp next={nextScreen} />}
      />
      <Route
        path="/signup/1"
        render={props => <BusinessBasics next={nextScreen} />}
      />
      <Route
        path="/signup/2"
        render={props => <BusinessPayment next={nextScreen} />}
      />
      <Route
        path="/signup/3"
        render={props => <BusinessDescription next={nextScreen} />}
      />
      <Route
        path="/signup/4"
        render={props => <BusinessLogo next={nextScreen} />}
      />
      <Route
        path="/signup/5"
        render={props => <SignUpComplete next={nextScreen} />}
      />
    </Container>
  );
}
