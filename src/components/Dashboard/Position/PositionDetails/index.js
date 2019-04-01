import React, { useContext } from "react";

import { PositionQuestionContext } from "../PositionContext";
import {
  createPosition,
  questions,
  dashboard
} from "../../../../constants/routes";

import {
  DetailsContainer,
  Instructions,
  Intro,
  SubInstructions,
  SubInstructionsItalics,
  PositionNameInput,
  TextArea,
  PositionNextButton
} from "./styles";

export default function PositionDetails(props) {
  const navigateNext = () => {
    props.history.push(`${dashboard}${createPosition}${questions}`);
  };

  let positionContext = useContext(PositionQuestionContext);
  return (
    <DetailsContainer>
      <Intro>
        The next few steps will guide you through creating an open position and
        allow you to create a custom application for that position.
      </Intro>
      <Instructions>Give your position a title</Instructions>
      <SubInstructions>
        This will be appear on your business page.
      </SubInstructions>
      <PositionNameInput
        placeholder="Position Name"
        value={positionContext.positionName}
        onChange={e => positionContext.setPositionName(e.target.value)}
      />
      <SubInstructionsItalics>
        Example: "Server - Weekends"
      </SubInstructionsItalics>
      <Instructions>Describe your position</Instructions>
      <SubInstructions>
        Give a good description of your position. You want prospective
        applicants to know exactly what they are applying for.
      </SubInstructions>
      <TextArea
        placeholder="Write your description here."
        value={positionContext.positionDesc}
        onChange={e => positionContext.setPositionDesc(e.target.value)}
      />
      <PositionNextButton onClick={navigateNext}>CONTINUE</PositionNextButton>
    </DetailsContainer>
  );
}
