import styled from "styled-components";
import { media } from "../../styles/mediaQueries";

import {
  textDark,
  textLight,
  textBlue,
  borderRed,
  backgroundBlue,
  borderGrey
} from "../../constants/colors";
import { FormButton } from "../../styles/buttons";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fafafa;
`;

export const SignInContainer = styled.div`
  flex-grow: 1;
  align-self: center;
  padding: 40px 50px;
  width: 100%;
  max-width: 500px;
  display: flex;
  ${media.desktop`
    justify-content: center;
    align-items: center;`}
`;

export const SignInCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  margin-top: 10px;
  label {
    font-size: 1.1rem;
    margin-left: 5px;
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
  margin-left: 10px;
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
