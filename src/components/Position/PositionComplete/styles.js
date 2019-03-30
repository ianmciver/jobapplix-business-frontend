import styled from "styled-components";

import {
  textBlue,
  textLight,
  backgroundBlue,
  borderBlue
} from "../../../constants/colors";
import { NextButton } from "../../SignUp/SignUpContainer/styles";

export const PositionCompleteContainer = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 70px;
  margin-bottom: 20px;
`;

export const Welcome = styled.h1`
  color: ${textBlue};
  font-size: 3.4rem;
  font-weight: 700;
  text-align: center;
  margin: 10px 0 0;
  letter-spacing: 0.2rem;
`;

export const SubText = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin: 20px 10px 10px;
`;

export const PositionButton = styled(NextButton)`
  align-self: center;
  color: ${textBlue};
  border-color: ${borderBlue};
  margin-bottom: 20px;
  &:hover {
    background-color: ${backgroundBlue};
    color: ${textLight};
  }
`;
