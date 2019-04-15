import styled, { css } from "styled-components";

import {
  textUnselected,
  borderLight,
  borderGreen,
  backgroundGreen,
  textLight
} from "../../../../constants/colors";
export const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15px;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  ${props =>
    props.selected &&
    css`
      background-color: ${backgroundGreen};
    `}
  ${props =>
    props.selected
      ? css`
          border: 1px solid ${borderGreen};
        `
      : css`
          border: 1px solid ${borderLight};
        `}
  border-radius: 12px;
  margin: 5px 8px;
  cursor: pointer;
`;

export const TabTitle = styled.span`
  font-size: 1.2rem;
  color: ${props => (props.selected ? textLight : textUnselected)};
  text-transform: uppercase;
`;
