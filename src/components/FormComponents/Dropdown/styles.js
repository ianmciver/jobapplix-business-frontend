import styled from "styled-components";

import {
  borderLight,
  backgroundWhite,
  backgroundBlue,
  textLight,
  textDark
} from "../../../constants/colors";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  padding: 10px 15px;
  border: 1px solid ${borderLight};
  border-radius: 3px;
  background-color: ${backgroundWhite};
  width: 51px;
`;

export const DropdownValue = styled.span`
  font-size: 1.4rem;
  color: ${textDark};
  position: relative;
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  width: 150%;
  top: ${props => (props.top ? `-${props.top}px` : 0)};
  left: 0;
  z-index: 9999;
  background-color: ${backgroundWhite};
  border: 1px solid ${borderLight};
  border-radius: 3px;
`;

export const DropdownList = styled.ul``;

export const DropdownListItem = styled.li`
  padding: 10px 15px;
  font-size: 1.4rem;
  color: ${textDark};
  text-align: left;
  background-color: ${props => props.selected && backgroundBlue};
  color: ${props => props.selected && textLight};
  &:hover {
    background-color: ${backgroundBlue};
    color: ${textLight};
  }
`;
