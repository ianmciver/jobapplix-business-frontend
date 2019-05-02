import styled from "styled-components";

import { textLight, borderWhite } from "../../../../../constants/colors";

export const PositionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const PositionCheckBox = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 1px solid ${borderWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
  }
`;

export const PositionName = styled.span`
  font-size: 1.5rem;
  color: ${textLight};
  padding-left: 10px;
`;
