import styled from "styled-components";

import { borderLight, textBlue } from "../../../constants/colors";

export const DropContainer = styled.div`
  border: 2px solid ${borderLight};
  border-width: ${props => (props.background.length > 0 ? `0px` : "2px")};
  width: 100%;
  max-width: 350px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.background
      ? `url(${props.background}) no-repeat center center`
      : `transparent`};
  background-size: contain;
  outline: none;
`;

export const DropInstructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.6rem;
  }
`;

export const AddIcon = styled.img`
  width: 30px;
  margin-bottom: 10px;
`;

export const AdditionalInstructions = styled.p`
  font-size: 1.1rem;
  margin: 10px;
`;

export const ButtonContainer = styled.div`
  align-self: center;
`;

export const SkipOption = styled.span`
  color: ${textBlue};
  text-decoration: underline;
  font-size: 1.4rem;
  padding: 10px 0;
`;
