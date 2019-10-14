import styled from "styled-components";

import { NextButton } from "../../../../SignUp/SignUpContainer/styles";

export const ExistingQuestionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.theme.textDark};
    margin-bottom: 10px;
  }

  span {
    font-size: 1.1rem;
  }
`;

export const AddCustomButton = styled(NextButton)`
  border-color: ${props => props.theme.borderGrey};
  color: ${props => props.theme.textDark};
  background-color: transparent;
  margin-top: 20px;
  &:hover {
    background-color: ${props => props.theme.backgroundGrey};
    color: ${props => props.theme.textLight};
  }
`;
