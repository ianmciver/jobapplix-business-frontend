import styled from "styled-components";

import { media } from "../../../styles/mediaQueries";

import {
  borderBlue,
  borderLight,
  borderGrey,
  textBlue,
  backgroundWhite,
  textLight
} from "../../../constants/colors";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${backgroundWhite};
  ${media.desktop`
    border: 1px solid ${borderLight};
    border-radius: 7px;
    box-shadow: 1px 1px 2px ${borderLight};
    margin-top: 50px;
  `}
`;

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border-bottom: 3px solid ${borderBlue};
  width: 100%;
`;

export const Welcome = styled.p`
  font-size: 2rem;
  color: ${textBlue};
`;

export const Greeting = styled.p`
  margin-top: 10px;
  font-size: 1.3rem;
  line-height: 1.7rem;
`;

export const OverviewContainer = styled.div`
  width: 100%;
`;

export const Overview = styled.div`
  padding: 20px 30px 10px;
  border-bottom: 2px solid ${borderLight};

  p {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const PositionContainer = styled.div`
  width: 100%;
  padding: 15px 30px;
  border-bottom: 1px solid ${borderLight};
`;

export const PositionNameContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h3 {
    margin: 0 5px;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;

    &:first-of-type {
      margin-left: 0;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${textBlue};
  }
`;

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StatContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatNumber = styled.h4`
  font-size: 3.4rem;
  color: ${textBlue};
  font-weight: 700;
`;

export const StatTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const ActionButton = styled.button`
  margin: 30px auto;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 700;
  outline: none;
  background-color: ${backgroundWhite};
  border: 1px solid ${borderGrey};
  border-radius: 28px;
  padding: 0 23px;
  height: 56px;
  cursor: pointer;
  &:hover {
    border-color: ${borderBlue};
    background-color: ${borderBlue};
    color: ${textLight};
  }
`;
