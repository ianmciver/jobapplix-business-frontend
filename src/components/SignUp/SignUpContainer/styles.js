import styled from "styled-components";

import {
  textDark,
  textLight,
  textBlue,
  borderGrey,
  borderLight,
  borderRed,
  backgroundLight
} from "../../../constants/colors";

import { FormButton } from "../../../styles/buttons";

export const Container = styled.div`
  padding: 30px 50px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  max-width: 700px;
  align-self: center;
`;

export const Headline = styled.h1`
  font-size: 2.3rem;
  color: ${textDark};
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

export const SubHeadline = styled.h2`
  margin-bottom: 10px;
  font-size: 1.4rem;
`;
export const Instructions = styled.span`
  margin: 0 10px 15px;
  font-size: 1.1rem;
  line-height: 1.3rem;
  text-align: center;
`;

export const Error = styled.p`
  color: ${borderRed};
  font-size: 1.2rem;
  padding: 5px 0;
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
export const AddressLine = styled.span`
  margin-bottom: 5px;
  font-size: 1.1rem;
  line-height: 2rem;
  text-align: center;
`;
export const JobApplixAddress = styled.span`
  font-size: 1.6rem;
  color: ${textBlue};
  margin-bottom: 15px;
`;
