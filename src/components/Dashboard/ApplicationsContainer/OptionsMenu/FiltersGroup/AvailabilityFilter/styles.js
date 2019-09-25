import styled, { css } from "styled-components";

export const AvailabilityContainer = styled.div`
  display: grid;
  min-width: 319px;
  background-color: white;
  border-radius: 5px;
  padding: 30px 20px 30px 30px;
  transform: ${props =>
    props.state === "entering" || props.state === "entered"
      ? `scale(1)`
      : `scale(0)`};
  transition: transform 100ms;
`;

export const RowTitle = styled.span`
  font-size: 1.8rem;
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
