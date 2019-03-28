import React, { useContext } from "react";

import { PositionQuestionContext } from "../../PositionContext";

import Question from "../../PositionQuestions/Question";

import { ExistingQuestionsContainer, AddCustomButton } from "./styles";

export default function ExistingCustomQuestions(props) {
  const positionContext = useContext(PositionQuestionContext);
  return (
    <ExistingQuestionsContainer>
      <h2>Existing Custom Questions</h2>
      {positionContext.customQuestions.length > 0 ? (
        positionContext.customQuestions.map(question => (
          <Question key={question.id} question={question} />
        ))
      ) : (
        <span>
          Your business does not yet have any custom questions built. Build your
          first question by clicking the button below!
        </span>
      )}
      <AddCustomButton onClick={props.toggleModal}>
        Create a Custom Question
      </AddCustomButton>
    </ExistingQuestionsContainer>
  );
}
