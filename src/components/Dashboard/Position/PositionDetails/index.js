import React, { useContext } from "react";

import { PositionQuestionContext } from "../PositionContext";

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
    props.history.push(props.nextScreen);
  };

  const navigateCancel = () => {
    props.history.push(props.cancelUpdate);
  };

  let positionContext = useContext(PositionQuestionContext);
  return (
    <DetailsContainer>
      <Intro>{props.instructionText}</Intro>
      <PositionNameInput
        placeholder="POSITION TITLE (eg: Server - Nights)"
        value={positionContext.positionName}
        onChange={e => positionContext.setPositionName(e.target.value)}
      />
      <SubInstructionsItalics>
        This will appear on your business page.
      </SubInstructionsItalics>
      <Instructions>Describe your position:</Instructions>
      <SubInstructions>
        Give a good description of your position. You want prospective
        applicants to know exactly what they are applying for.
      </SubInstructions>
      <TextArea
        placeholder="Write your description here."
        value={positionContext.positionDesc}
        onChange={e => positionContext.setPositionDesc(e.target.value)}
      />
      <PositionNextButton
        disabled={positionContext.positionName === ""}
        onClick={navigateNext}
      >
        CONTINUE
      </PositionNextButton>
      {props.cancel && (
        <PositionNextButton onClick={navigateCancel} cancel>
          CANCEL UPDATE
        </PositionNextButton>
      )}
    </DetailsContainer>
  );
}
