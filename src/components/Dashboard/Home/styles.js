import styled from "styled-components";

import { media } from "../../../styles/mediaQueries";

export const HomeContainer = styled.div`
  margin-top: 25px;
  width: calc(100% - 60px);
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
  ${media.desktop`
    width: calc(100% - 205px);
    margin-top: 50px;
    margin-left: 155px;
    margin-right: 50px;
  `};
`;

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: 100%;
`;

export const Welcome = styled.p`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 20px;
  align-self: flex-start;
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
  border-bottom: 2px solid ${props => props.theme.borderLight};

  p {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const PositionContainer = styled.div`
  width: 100%;
  padding: 15px 30px;
  border-bottom: 1px solid ${props => props.theme.borderLight};
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
    color: ${props => props.theme.textBlue};
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
  color: ${props => props.theme.textBlue};
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
  background-color: ${props => props.theme.backgroundWhite};
  border: 1px solid ${props => props.theme.borderGrey};
  border-radius: 28px;
  padding: 0 23px;
  height: 56px;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.theme.borderBlue};
    background-color: ${props => props.theme.borderBlue};
    color: ${props => props.theme.textLight};
  }
`;
