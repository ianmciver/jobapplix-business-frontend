import styled, { css } from "styled-components";

import {
  textBlue,
  backgroundWhite,
  borderLight
} from "../../../../constants/colors";

export const SubjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  width: 100%;
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
