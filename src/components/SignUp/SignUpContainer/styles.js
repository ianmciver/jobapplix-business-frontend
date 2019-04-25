import styled from "styled-components";

import {
  textDark,
  textBlue,
  textLight,
  borderGrey,
  borderLight,
  borderRed,
  backgroundLight
} from "../../../constants/colors";

import { FormButton } from "../../../styles/buttons";

export const Container = styled.div`
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .headline {
    font-size: 2.3rem;
    color: ${textDark};
    font-weight: 700;
    padding-bottom: 20px;
  }
  .step {
    color: ${textBlue};
    font-weight: 700;
    margin: 0;
  }
  span {
    margin: 0 10px 15px;
    font-size: 1.1rem;
    line-height: 1.3rem;
    text-align: center;
  }
  .no-match {
    line-height: 1.5rem;
    color: ${borderRed};
    margin: 10px 0;
  }
`;

export const NextButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${textDark};
  padding: 7px 14px;

  &:hover {
    background-color: ${borderGrey};
    color: ${textLight};
  }

  &:disabled {
    border-color: ${borderLight};
    color: ${borderLight};
    background-color: ${backgroundLight};
  }
`;
