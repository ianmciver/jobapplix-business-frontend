import React from "react";
import { Route } from "react-router-dom";

import UserCheckHOC from "../UserCheckHOC";

import UserSignUp from "../UserSignUp";
import BusinessBasics from "../BusinessBasics";
import BusinessDescription from "../BusinessDescription";
import BusinessPayment from "../BusinessPayment";
import BusinessLogo from "../BusinessLogo";
import SignUpComplete from "../SignUpComplete";
import Header from "../../Header";
import Footer from "../../Footer";

import { Container } from "./styles";
import { AppContainer } from "../../SignIn/styles";
import { signup } from "../../../constants/routes";

export default function SignUpContainer(props) {
  const nextScreen = () => {
    let location = props.location.pathname.split("/");
    let step = location[location.length - 1];
    if (step === "signup") {
      props.history.push(`${signup}/1`);
    } else {
      props.history.push(`${signup}/${Number(step) + 1}`);
    }
  };

  return (
    <AppContainer>
      <Header />
      <Container>
        <Route
          exact
          path={signup}
          render={props => <UserSignUp next={nextScreen} />}
        />
        <Route
          path={`${signup}/1`}
          render={props => (
            <UserCheckHOC>
              <BusinessBasics next={nextScreen} />
            </UserCheckHOC>
          )}
        />
        <Route
          path={`${signup}/2`}
          render={props => (
            <UserCheckHOC>
              <BusinessDescription next={nextScreen} />
            </UserCheckHOC>
          )}
        />
        <Route
          path={`${signup}/3`}
          render={props => (
            <UserCheckHOC>
              <BusinessPayment next={nextScreen} />
            </UserCheckHOC>
          )}
        />
        <Route
          path={`${signup}/4`}
          render={props => (
            <UserCheckHOC>
              <BusinessLogo next={nextScreen} />
            </UserCheckHOC>
          )}
        />
        <Route
          path={`${signup}/5`}
          render={props => (
            <UserCheckHOC>
              <SignUpComplete next={nextScreen} {...props} />
            </UserCheckHOC>
          )}
        />
      </Container>
      <Footer />
    </AppContainer>
  );
}
