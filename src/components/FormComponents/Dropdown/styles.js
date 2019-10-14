import styled from "styled-components";

export const DropdownContainer = styled.div`
  margin-right: 8px;
  position: relative;
  display: inline-flex;
  justify-content: space-around;
  padding: 5px 7px;
  border: 1px solid ${props => props.theme.borderLight};
  border-radius: 5px;
  background-color: ${props => props.theme.backgroundWhite};
  width: 72px;
  cursor: pointer;

  svg {
    height: 12px;
    width: 6px;
    transform: rotate(90deg);
  }
`;

export const DropdownValue = styled.span`
  font-size: 1.2rem;
  color: ${props => props.theme.textDark};
  position: relative;
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  width: 72px;
  top: ${props => (props.top ? `-${props.top}px` : "-2px")};
  left: -2px;
  z-index: 9999;
  background-color: ${props => props.theme.backgroundWhite};
  border: 1px solid ${props => props.theme.borderLight};
  border-radius: 3px;
  overflow: hidden;
`;

export const DropdownListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  font-size: 1.2rem;
  color: ${props => props.theme.textDark};
  background-color: ${props => props.selected && props.theme.backgroundBlue};
  color: ${props => props.selected && props.theme.textLight};
  &:hover {
    background-color: ${props => props.theme.backgroundBlue};
    color: ${props => props.theme.textLight};
  }
`;
