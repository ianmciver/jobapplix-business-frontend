import styled from "styled-components";
import { lighten } from "polished";

import { NextButton } from "../../../../styles/forms2";

export const SubjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 100%;
  margin: 30px 0 10px;
`;

export const SubjectImageHolder = styled.div`
  max-width: 100%;
  max-height: 200px;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const SubjectImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

export const AddImageText = styled.p`
  color: ${props => props.theme.textBlue};
  font-size: 1.2rem;
  margin: 5px 0 30px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 30px;
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

export const ConfirmButton = styled(NextButton)``;

export const Error = styled.p`
  color: ${props => props.theme.borderRed};
  font-size: 1.2rem;
  padding: 5px 0;
`;
