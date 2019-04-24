import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  dashboard,
  questions,
  updatePositionUrl,
  positionsList
} from "../../../../constants/routes";

import { PositionQuestionContext } from "../PositionContext";
import { UpdatePosHeader } from "./styles";

import PositionDetails from "../PositionDetails";
import PositionQuestions from "../PositionQuestions";

const updatePositionTextDescription =
  "On the following screens you will be able to update every part of your position and it's application. Please note that nothing will be saved until you press the save button on the final screen. You can cancel at any time and your position will remain the same.";

const updatePositionTextQuestions =
  "Use this form to update the custom application for this position. If you do not see a specific question you would like to ask, you have the ability to create and add custom questions in the last section.";
function UpdatePositionContainer(props) {
  const positionContext = useContext(PositionQuestionContext);
  useEffect(() => {
    if (props.match.params.id === undefined) props.history.replace(dashboard);
    const position = props.positions.find(
      pos => pos.id === Number(props.match.params.id)
    );
    positionContext.loadPosition(position);
  }, []);

  return (
    <>
      <UpdatePosHeader>Update Postition</UpdatePosHeader>
      <Route
        path={`${dashboard}${updatePositionUrl}/:id`}
        exact
        render={props => (
          <PositionDetails
            {...props}
            nextScreen={`${dashboard}${updatePositionUrl}/${
              props.match.params.id
            }${questions}`}
            cancelUpdate={`${dashboard}${positionsList}`}
            instructionText={updatePositionTextDescription}
            cancel
          />
        )}
      />
      <Route
        path={`${dashboard}${updatePositionUrl}/:id${questions}`}
        render={props => (
          <PositionQuestions
            {...props}
            nextScreen={`${dashboard}${positionsList}`}
            cancelUpdate={`${dashboard}${positionsList}`}
            instructionText={updatePositionTextQuestions}
            cancel
            action={positionContext.updatePosition}
          />
        )}
      />
    </>
  );
}

export default connect(state => ({ positions: state.business.positions }))(
  UpdatePositionContainer
);
