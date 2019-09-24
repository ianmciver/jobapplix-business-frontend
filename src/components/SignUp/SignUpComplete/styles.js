import styled from "styled-components";
import { media } from "../../../styles/mediaQueries";

import {
  textBlue,
  textLight,
  backgroundBlue,
  borderBlue
} from "../../../constants/colors";
import { NextButton } from "../SignUpContainer/styles";

export const CompleteContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.desktop`align-self: center;`}
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
  font-size: 1.6rem;
  text-align: center;
  margin: 20px 10px 10px;
  line-height: 2.4rem;
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
