import styled, { css } from "styled-components";

import {
  borderWhite,
  textLight,
  textBlue
} from "../../../../../constants/colors";

export const AvailabilityContainer = styled.div`
  display: grid;
  width: 100%;
  border: 2px solid black;
`;

export const RowTitle = styled.span`
  font-size: 1.2rem;
  color: ${textLight};
  padding: 5px 0;
`;

export const SelectorBox = styled.div`
  padding: 5px;
  border: 1px solid ${borderWhite};
  border-radius: 5px;
  color: ${props => (props.selected ? textBlue : textLight)};
  margin: 5px 0;
  cursor: pointer;
  ${props =>
    props.selected &&
    css`
      background-color: ${borderWhite};
    `}
`;
