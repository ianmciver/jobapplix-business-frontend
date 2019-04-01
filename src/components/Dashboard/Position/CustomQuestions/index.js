import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { PositionQuestionContext } from "../PositionContext";
import { API_URL } from "../../../../constants/urls";
import {
  createPosition,
  availability,
  dashboard
} from "../../../../constants/routes";

import { InstructionSpan, ContinueButton } from "./styles";

import ExistingCustomQuestions from "./ExistingCustomQuestions";
import CustomQuestionBuilder from "./CustomQuestionBuilder";
import BuilderModal from "./BuilderModal";

function CustomQuestionsContainer(props) {
  const positionContext = useContext(PositionQuestionContext);
  const [modal, setModal] = useState(false);

  const getCustomQuestions = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/businesses/customquestions?bid=1`
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
    setModal(!modal);
  };

  return (
    <>
      <InstructionSpan>
        In this section you will be able to add and create custom questions for
        your application. You will see a list of custom questions you have
        created previously below. To include a question from this list, simply
        click on the check box and it will be included on your applicaiton.
      </InstructionSpan>
      <InstructionSpan>
        To create a new custom question simply click the button and follow the
        instructions.
      </InstructionSpan>
      <ExistingCustomQuestions toggleModal={toggleModal} />
      <BuilderModal open={modal}>
        <CustomQuestionBuilder toggleModal={toggleModal} {...props} />
      </BuilderModal>
      <ContinueButton
        onClick={() =>
          props.history.push(`${dashboard}${createPosition}${availability}`)
        }
      >
        Save and Continue
      </ContinueButton>
    </>
  );
}

export default connect(
  state => ({ business: state.business }),
  {}
)(CustomQuestionsContainer);
