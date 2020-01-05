import React, { useContext } from "react";

import { QuestionContainer, QuestionText, SubQuestionText } from "./styles";
import { PositionQuestionContext } from "../../PositionContext";

import { Checkbox } from "../../../../../styles/forms2";

export default function Question(props) {
  const positionContext = useContext(PositionQuestionContext);
  const isActive = props.question.isActive
    ? props.question.isActive
    : positionContext.activeQuestions.indexOf(props.question.id) > -1;
  const clickHandler = props.question.toggle
    ? props.question.toggle
    : positionContext.addOrRemoveActiveQuestions;
  return (
    <QuestionContainer>
      <Checkbox
        checked={isActive}
        onChange={() => {
          if (props.question.id < 9) return;
          clickHandler(props.question.id);
        }}
        style={{
          width: "24px",
          height: "24px",
          marginRight: "10px"
        }}
      />
      <div>
        <QuestionText>{props.question.question}</QuestionText>
        {props.question.sub_question && (
          <SubQuestionText>{props.question.sub_question}</SubQuestionText>
        )}
      </div>
    </QuestionContainer>
  );
}
