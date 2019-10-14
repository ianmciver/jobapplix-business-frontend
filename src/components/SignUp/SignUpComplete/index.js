import React from "react";

import JALogo from "../../../assets/Icon100.png";

import { CompleteContainer, Logo, Welcome, SubText } from "./styles";
import { NextButton } from "../../../styles/forms2";
import { dashboard, createPosition } from "../../../constants/routes";

export default function SignUpComplete(props) {
  const navigateToPostition = () => {
    props.history.push(`${dashboard}${createPosition}`);
  };

  const navigateToDash = () => {
    props.history.push(dashboard);
  };

  return (
    <CompleteContainer>
      <Logo src={JALogo} alt="Job Applix logo" />
      <Welcome>WE'RE EXCITED YOU'RE HERE!</Welcome>
      <SubText>
        Welcome to JobApplix, we are excited to get started and help you take
        control of your hiring process!
      </SubText>
      <SubText>
        Now, let's keep this momentum rolling and create your first position and
        custom application!
      </SubText>
      <NextButton onClick={navigateToPostition}>
        CREATE FIRST POSITION
      </NextButton>
      <SubText>Or, head on over to your business portal.</SubText>
      <NextButton onClick={navigateToDash}>
        SIGN IN TO BUSINESS PORTAL &rarr;
      </NextButton>
    </CompleteContainer>
  );
}
