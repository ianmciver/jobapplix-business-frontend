import React from "react";
import { Route } from "react-router-dom";

import UserCheckHOC from "../UserCheckHOC";

import UserSignUp from "../UserSignUp";
import BusinessBasics from "../BusinessBasics";
import CustomUrl from "../CustomUrl";
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
    const { state } = props.location;
    const newState = state ? Number(state) + 1 : 1;

    props.history.push({ pathname: signup, state: newState.toString() });
  };

  var queries = document.location.search
    .substr(1)
    .split("&")
    .reduce((a, b) => {
      let items = b.split("=");
      a[items[0]] = items[1];
      return a;
    }, {});

  if (queries.affiliate) {
    localStorage.setItem("affiliate", queries.affiliate);
  }

  return (
    <AppContainer>
      <Header />
      <Container>
        <Route
          path={signup}
          render={props => {
            const { location } = props;
            if (!location.state) {
              return <UserSignUp next={nextScreen} />;
            } else if (location.state === "1") {
              return (
                <UserCheckHOC>
                  <BusinessBasics next={nextScreen} />
                </UserCheckHOC>
              );
            } else if (location.state === "2") {
              return (
                <UserCheckHOC>
                  <CustomUrl next={nextScreen} />
                </UserCheckHOC>
              );
            } else if (location.state === "3") {
              return (
                <UserCheckHOC>
                  <BusinessDescription next={nextScreen} />
                </UserCheckHOC>
              );
            } else if (location.state === "4") {
              return (
                <UserCheckHOC>
                  <BusinessPayment next={nextScreen} />
                </UserCheckHOC>
              );
            } else if (location.state === "5") {
              return (
                <UserCheckHOC>
                  <BusinessLogo next={nextScreen} />
                </UserCheckHOC>
              );
            } else if (location.state === "6") {
              return (
                <UserCheckHOC>
                  <SignUpComplete {...props} />
                </UserCheckHOC>
              );
            }
          }}
        />
      </Container>
      <Footer />
    </AppContainer>
  );
}
