import styled from "styled-components";

import { NextButton } from "../../../SignUp/SignUpContainer/styles";

export const PositionCompleteContainer = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 70px;
  margin: 55px 0 20px;
`;

export const Welcome = styled.h1`
  color: ${props => props.theme.textBlue};
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
  color: ${props => props.theme.textBlue};
  border-color: ${props => props.theme.borderBlue};
  margin-bottom: 20px;
  &:hover {
    background-color: ${props => props.theme.backgroundBlue};
    color: ${props => props.theme.textLight};
  }
`;
