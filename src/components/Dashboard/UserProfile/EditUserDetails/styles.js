import styled, { css } from "styled-components";
import { lighten } from "polished";
import { NextButton } from "../../../../styles/forms2";
import { media } from "../../../../styles/mediaQueries";
import {
  textBlue,
  backgroundWhite,
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

export const Error = styled.p`
  color: ${borderRed};
  font-size: 1.2rem;
  padding: 5px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  ${media.desktop`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `}
`;

export const CancelButton = styled(NextButton)`
  margin-right: 20px;
  background-image: none;
  background-color: ${props => props.theme.backgroundGrey};
  height: 40px;
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.backgroundGrey)};
  }
`;

export const SubmitButton = styled(NextButton)``;
