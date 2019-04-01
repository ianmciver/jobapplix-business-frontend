import React, { useContext } from "react";

import { InstructionSpan, PositionNextButton } from "./styles";

import QuestionGroup from "./QuestionGroup";
import { PositionQuestionContext } from "../PositionContext";
import {
  dashboard,
  createPosition,
  customQuestions
} from "../../../../constants/routes";

export default function PositionQuestions(props) {
  const positionContext = useContext(PositionQuestionContext);
  const navigateNext = () => {
    props.history.push(`${dashboard}${createPosition}${customQuestions}`);
  };
  return (
    <>
      <InstructionSpan>
        Use this form to create your custom application for this position. If
        you do not see a specific question you would like to ask, you will have
        the ability to create custom questions in the next step.
      </InstructionSpan>
      <InstructionSpan>
        Simply click on the plus icon for each group to see the list of
        available questions, then click on the checkbox next to the questions
        you would like to add to your custom application. (Follow up questions
        in parenthesis)
      </InstructionSpan>
      {Object.values(positionContext.standardQuestions).map(group => {
        return (
          <QuestionGroup
            title={group.title}
            key={group.title}
            questions={group.questions}
          />
        );
      })}
      {Object.values(positionContext.refsQuestions).map(group => {
        return (
          <QuestionGroup
            title={group.title}
            key={group.title}
            questions={group.questions}
          />
        );
      })}
      <PositionNextButton onClick={navigateNext}>CONTINUE</PositionNextButton>
    </>
  );
}
