import styled from "styled-components";

import {
  backgroundLight,
  backgroundWhite,
  borderBlue,
  backgroundBlue,
  textBlue,
  textLight,
  textDark
} from "../../../../../constants/colors";
import { NextButton } from "../../../../SignUp/SignUpContainer/styles";

export const ExistingQuestionsContainer = styled.div`
  width: 100vw;
  background-color: ${backgroundLight};
  display: flex;
  flex-direction: column;
  padding: 30px;

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${textDark};
    margin-bottom: 10px;
  }

  span {
    font-style: italic;
  }
`;

export const AddCustomButton = styled(NextButton)`
  border-color: ${borderBlue};
  color: ${textBlue};
  background-color: ${backgroundWhite};
  margin-top: 20px;
  &:hover {
    background-color: ${backgroundBlue};
    color: ${textLight};
  }
`;
