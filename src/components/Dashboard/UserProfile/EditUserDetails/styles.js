import styled, { css } from "styled-components";

import { FormButton } from "../../../../styles/buttons";
import {
  textBlue,
  backgroundWhite,
  borderLight,
  borderGrey,
  textLight,
  backgroundLight,
  borderRed
} from "../../../../constants/colors";

export const SubjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  width: 100%;
  margin-bottom: 10px;
`;

export const SubjectImageHolder = styled.div`
  width: 75%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SubjectImage = styled.div`
  width: 100%;
  height: 100px;
  ${props =>
    css`
      background: url(${props.image});
    `};
  background-position: center;
  background-size: contain;
  background-color: ${backgroundWhite};
  background-repeat: no-repeat;
`;

export const AddImageText = styled.p`
  color: ${textBlue};
  font-size: 1.2rem;
  margin-top: 5px;
`;

export const InputLabel = styled.p`
  font-size: 1rem;
  align-self: flex-start;
`;

export const UrlContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const UrlInfo = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

export const UrlLink = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  color: ${textBlue};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 0 30px;
`;

export const SubmitButton = styled(FormButton)`
  font-weight: 700;
  color: ${props => (props.cancel ? borderRed : borderGrey)};
  padding: 7px 14px;
  border-color: ${props => (props.cancel ? borderRed : borderGrey)};
  margin: 10px;
  &:hover {
    background-color: ${props => (props.cancel ? borderRed : borderGrey)};
    color: ${textLight};
  }

  &:disabled {
    border-color: ${borderLight};
    color: ${borderLight};
    background-color: ${backgroundLight};
  }
`;

export const Error = styled.p`
  color: ${borderRed};
  font-size: 1.2rem;
  padding: 5px 0;
`;
