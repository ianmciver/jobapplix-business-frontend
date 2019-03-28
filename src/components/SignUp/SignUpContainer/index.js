import React from "react";
import { Route } from "react-router-dom";

import UserSignUp from "../UserSignUp";
import BusinessBasics from "../BusinessBasics";
import BusinessDescription from "../BusinessDescription";
import BusinessPayment from "../BusinessPayment";
import BusinessLogo from "../BusinessLogo";
import SignUpComplete from "../SignUpComplete";

import { Container } from "./styles";

export default function SignUpContainer(props) {
  const nextScreen = () => {
    let location = props.location.pathname.split("/");
    let step = location[location.length - 1];
    if (step === "signup") {
      props.history.push("/signup/1");
    } else {
      props.history.push(`/signup/${Number(step) + 1}`);
    }
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
        render={props => <BusinessDescription next={nextScreen} />}
      />
      <Route
        path="/signup/3"
        render={props => <BusinessPayment next={nextScreen} />}
      />
      <Route
        path="/signup/4"
        render={props => <BusinessLogo next={nextScreen} />}
      />
      <Route
        path="/signup/5"
        render={props => <SignUpComplete next={nextScreen} {...props} />}
      />
    </Container>
  );
}
