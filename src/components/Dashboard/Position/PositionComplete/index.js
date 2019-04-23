import React, { useContext } from "react";
import { connect } from "react-redux";

import { createPosition, dashboard } from "../../../../constants/routes";
import JALogo from "../../../../assets/Icon100.png";
import { PositionQuestionContext } from "../PositionContext";
import {
  Logo,
  Welcome,
  SubText,
  PositionButton,
  PositionCompleteContainer
} from "./styles";

function PositionComplete(props) {
  const positionContext = useContext(PositionQuestionContext);
  const navigateToPostition = () => {
    props.history.push(`${dashboard}${createPosition}`);
  };

  const navigateToDash = () => {
    props.history.push(dashboard);
  };

  return (
    <PositionCompleteContainer>
      <Logo src={JALogo} alt="Job Applix logo" />
      <Welcome>NICE! LETS START HIRING!</Welcome>
      <SubText>
        Your position has been created! You can view your application by going
        here:{" "}
        <a
          href={`https://${props.business.url}.jobapplix.com/${
            positionContext.postitionName
          }`}
          target="_blank_"
        >
          https://{props.business.url}.jobapplix.com/
          {positionContext.postitionName}
        </a>
      </SubText>
      <SubText>What would you like to do next?</SubText>
      <PositionButton onClick={navigateToPostition}>
        CREATE ANOTHER POSITION
      </PositionButton>
      <SubText>Or, head on over to your business portal.</SubText>
      <PositionButton onClick={navigateToDash}>
        GO TO BUSINESS PORTAL
      </PositionButton>
    </PositionCompleteContainer>
  );
}

export default connect(state => ({ business: state.business }))(
  PositionComplete
);
