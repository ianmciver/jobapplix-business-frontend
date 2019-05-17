import styled from "styled-components";

import { textDark, textBlue, borderQuestion } from "../../../constants/colors";

import { media } from "../../../styles/mediaQueries";

export const PositionsListContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media.desktop`padding: 0 50px;`}
`;

export const PositionsListTitle = styled.h2`
  font-size: 1.9rem;
  color: ${textDark};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const PositionsListDescription = styled.p`
  font-size: 1.2rem;
  color: ${textDark};
  line-height: 1.6rem;
  margin: 0 30px;
  max-width: 600px;
  text-align: center;
`;

export const PositionTable = styled.div`
  width: 100%;
  padding: 20px 30px;
`;

export const PositionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${borderQuestion};
  padding: 10px 0;
`;

export const PositionName = styled.h2`
  font-size: 1.4rem;
  margin-right: 10px;
`;

export const UpdateAndActive = styled.div`
  display: flex;
  align-items: center;
`;

export const UpdateLink = styled.h3`
  cursor: pointer;
  font-size: 1.4rem;
  color: ${textBlue};
  margin-right: 10px;
`;

export const CreateButton = styled.div`
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  margin: 30px 30px 0 30px;

  svg {
    width: 15px;
    height: 15px;
    fill: ${textBlue};
    margin-right: 7px;
  }

  span {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700px;
    color: ${textBlue};
  }
`;
