import React, { useContext } from "react";

import { PositionQuestionContext } from "../../PositionContext";

import CheckBoxCheck from "../../../../../assets/checkboxCheck";

import Question from "../../PositionQuestions/Question";

import { ExistingQuestionsContainer, AddCustomButton } from "./styles";

export default function ExistingCustomQuestions(props) {
  const positionContext = useContext(PositionQuestionContext);
  return (
    <ExistingQuestionsContainer>
      {positionContext.customQuestions.length > 0 ? (
        positionContext.customQuestions.map(question => (
          <Question key={question.id} question={question} />
        ))
      ) : (
        <span>
          You do not currently have any saved questions. Start creating custom
          questions and they can be found here for future use across your entire
          organization.
        </span>
      )}
      {!props.open && (
        <AddCustomButton onClick={props.toggleModal}>
          <CheckBoxCheck /> <span>CREATE NEW QUESTION</span>
        </AddCustomButton>
      )}
    </ExistingQuestionsContainer>
  );
}
