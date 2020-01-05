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
  color: ${props => props.theme.textDark};
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.backgroundWhite};
  transition: transform 100ms linear;
  padding: 13px 20px;
  margin-top: 10px;
  &:hover {
    background-color: ${props => props.theme.backgroundWhite};
    color: ${props => props.theme.backgroundBlue};
    transform: translate(0, -3px);
    box-shadow: 1px 15px 10px -10px rgba(0, 0, 0, 0.1);
    svg {
      fill: ${props => props.theme.backgroundBlue};
    }
  }
  svg {
    fill: ${props => props.theme.textMedium};
    width: 11px;
    height: 11px;
  }
  span {
    padding-left: 10px;
    font-size: 1.3rem;
    font-weight: 400;
  }
`;
