import styled, { css } from "styled-components";
import { lighten } from "polished";

import { NextButton } from "../../../../../../styles/forms2";

export const AvailabilityFilterContainer = styled.div`
  display: grid;
  min-width: 319px;
  background-color: white;
  border-radius: 3px;
  transform: ${props =>
    props.state === "entered" ? `scale(1)` : `scale(0.8)`};
  opacity: ${props => (props.state === "entered" ? 1 : 0)};
  transition: all 300ms;
`;

export const AvailabilityHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.borderMedium69};
  font-size: 2rem;
  padding: 17.5px 21px;
`;

export const AvailabilityFooter = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.borderMedium69};
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
  padding: 17.5px 21px;
`;

export const AvailabilityChartContainer = styled.div`
  width: 100%;
  padding: 20px;
`;
export const RowTitle = styled.span`
  font-size: 1.4rem;
  color: ${props => props.theme.textDark};
  padding: 5px 0;
`;

export const SelectorBox = styled.div`
  padding: 5px;
  border: 1px solid ${props => props.theme.textDark};
  border-radius: 5px;
  color: ${props => props.theme.textDark};
  margin: 5px 0;

  cursor: pointer;
  ${props =>
    props.selected &&
    css`
      background-color: ${props.theme.textBlue};
      border-color: ${props.theme.textBlue};
      color: ${props.theme.textLight};
    `}
`;

export const CancelButton = styled(NextButton)`
  margin-right: 20px;
  background-image: none;
  background-color: ${props => props.theme.backgroundGrey};
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.backgroundGrey)};
  }
`;

export const ConfirmButton = styled(NextButton)``;
