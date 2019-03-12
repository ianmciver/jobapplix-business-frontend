import styled from "styled-components";

import { borderLight, textBlue } from "../../../constants/colors";

export const DropContainer = styled.div`
  border: 2px solid ${borderLight};
  border-width: ${props => (props.background.length > 0 ? `0px` : "2px")};
  width: 100%;
  height: 200px;
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

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddIcon = styled.img`
  width: 30px;
  margin-bottom: 10px;
`;

export const AdditionalInstructions = styled.p`
  font-size: 1.1rem;
  margin: 10px;
`;

export const SkipOption = styled.span`
  color: ${textBlue};
  text-decoration: underline;
  font-size: 1.4rem;
  padding: 10px 0;
`;
