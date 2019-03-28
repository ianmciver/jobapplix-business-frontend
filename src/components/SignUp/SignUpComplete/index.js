import React from "react";

import JALogo from "../../../assets/Icon100.png";

import { Logo, Welcome, SubText, PositionButton } from "./styles";

export default function SignUpComplete(props) {
  const navigateToPostition = () => {
    props.history.push("/createposition");
  };

  const navigateToDash = () => {
    props.history.push("/dashboard");
  };

  return (
    <>
      <Logo src={JALogo} alt="Job Applix logo" />
      <Welcome>WELCOME TO JOBAPPLIX!</Welcome>
      <SubText>
        We are excited to get started and help you take control of your hiring
        process!
      </SubText>
      <SubText>
        Now, let's keep this momentum rolling and create your first position and
        custom application!
      </SubText>
      <PositionButton onClick={navigateToPostition}>
        CREATE FIRST POSITION
      </PositionButton>
      <SubText>Or, head on over to your business portal.</SubText>
      <PositionButton onClick={navigateToDash}>
        SIGN IN TO BUSINESS PORTAL
      </PositionButton>
    </>
  );
}
