import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { PositionQuestionContext } from "../PositionContext";
import { API_URL } from "../../../../constants/urls";

import { InstructionSpan, DividerLine } from "./styles";

import ExistingCustomQuestions from "./ExistingCustomQuestions";
import CustomQuestionBuilder from "./CustomQuestionBuilder";

function CustomQuestionsContainer(props) {
  const positionContext = useContext(PositionQuestionContext);
  const [open, setOpen] = useState(false);

  const getCustomQuestions = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/businesses/customquestions?bid=${props.business.id}`
      );
      positionContext.setCustomQuestions(response.data.customQuestions);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCustomQuestions();
  }, []);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <InstructionSpan>
        In this section you will be able to add and create custom questions for
        your application. You will see a list of custom questions you have
        created previously below. To add a question from this list, simply click
        on the CREATE NEW QUESTION button to open the custom question editor.
      </InstructionSpan>
      <DividerLine />
      <ExistingCustomQuestions toggleModal={toggleModal} open={open} />
      {open && <CustomQuestionBuilder toggleModal={toggleModal} {...props} />}
    </>
  );
}

export default connect(
  state => ({ business: state.business }),
  {}
)(CustomQuestionsContainer);
