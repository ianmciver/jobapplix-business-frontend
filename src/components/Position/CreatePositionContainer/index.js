import React, { useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { CreatePosHeader } from "./styles";

import PositionDetails from "../PositionDetails";
import PositionQuestions from "../PositionQuestions";
import CustomQuestionsContainer from "../CustomQuestions";
import ShiftTimes from "../ShiftTimes";
import PositionComplete from "../PositionComplete";
import { PositionQuestionContext } from "../PositionContext";

import { questionGroups } from "../PositionQuestions/data";
import { API_URL } from "../../../constants/urls";

export default function CreatePositionContainer(props) {
  const positionContext = useContext(PositionQuestionContext);
  const getStandardQuestions = async () => {
    try {
      const questions = await axios.get(
        `${API_URL}/businesses/standardquestions`
      );
      questions.data.questions.forEach(question => {
        questionGroups[question.group].questions.push(question);
      });
      positionContext.setStandardQuestions(questionGroups);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStandardQuestions();
  }, []);

  return (
    <div>
      <CreatePosHeader>Create A Position</CreatePosHeader>
      <Route path="/createposition" exact component={PositionDetails} />
      <Route path="/createposition/questions" component={PositionQuestions} />
      <Route
        path="/createposition/customquestions"
        component={CustomQuestionsContainer}
      />
      <Route path="/createposition/availability" component={ShiftTimes} />
      <Route path="/createposition/complete" component={PositionComplete} />
    </div>
  );
}
