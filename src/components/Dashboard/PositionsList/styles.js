import styled from "styled-components";

import {
  textDark,
  borderQuestion,
  backgroundAppTable,
  backgroundBlue,
  textLight
} from "../../../constants/colors";

export const PositionsListContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
