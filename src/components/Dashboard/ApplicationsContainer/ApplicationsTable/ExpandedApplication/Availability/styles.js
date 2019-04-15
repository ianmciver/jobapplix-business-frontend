import styled, { css } from "styled-components";

import {
  borderAvailGraph,
  textMedium
} from "../../../../../../constants/colors";

export const AvailabilityChart = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 22.4% 1fr 1fr 1fr;
  grid-template-rows: repeat(8, 1fr);
`;

export const GridItem = styled.div`
  padding: 5px 0 2px;
  display: flex;
  ${props =>
    props.column &&
    css`
      grid-column: ${props.column} / ${props.column + 1};
    `}

  ${props =>
    props.row &&
    css`
      grid-row: ${props.row} / ${props.row + 1};
    `}


  ${props =>
    props.line &&
    css`
      border-bottom: 1px solid ${borderAvailGraph};
    `}

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
  ${props =>
    props.align &&
    css`
      justify-content: ${props.align};
    `}
`;

export const SelectedCheck = styled.svg`
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  fill: ${textMedium};
`;
