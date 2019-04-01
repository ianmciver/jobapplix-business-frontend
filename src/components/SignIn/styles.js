import styled from "styled-components";

import {
  textDark,
  textLight,
  textBlue,
  borderRed,
  backgroundBlue,
  borderGrey
} from "../../constants/colors";
import { FormButton } from "../../styles/buttons";

export const SignInContainer = styled.div`
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.3rem;
    color: ${textDark};
    font-weight: 700;
    padding-bottom: 20px;
  }
`;

export const CheckboxContainer = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;

  span {
    font-size: 1.1rem;
  }
`;

export const Checkbox = styled.div`
  width: 17px;
  height: 17px;
  border: 2px solid ${borderGrey};
  background-color: ${props =>
    props.checked ? backgroundBlue : "transparent"};
  margin-right: 10px;
  cursor: pointer;
`;

export const SignInButton = styled(FormButton)`
  align-self: flex-start;
  margin: 20px 0;
  color: textDark;
  &:hover {
    background-color: ${borderGrey};
    color: ${textLight};
  }
`;

export const SignUpCTA = styled.span`
  align-self: flex-start;
  font-size: 1.1rem;
  color: ${textDark};
  a {
    color: ${textBlue};
    font-weight: 700;
    cursor: pointer;
  }
`;

export const ErrorText = styled.span`
  margin-bottom: 10px;
  color: ${borderRed};
  font-style: italic;
  font-size: 1rem;
`;
