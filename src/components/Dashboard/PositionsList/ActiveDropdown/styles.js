import styled from "styled-components";

import {
  backgroundAppTable,
  backgroundBlue,
  textLight,
  borderLight
} from "../../../../constants/colors";

export const DropDownContainer = styled.div`
  position: relative;
  width: 131px;
  height: 28px;
`;

export const ClosedDropdownContainer = styled.div`
  min-width: 131px;
  border: 1px solid ${backgroundAppTable};
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  overflow: hidden;
`;

export const ActiveRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  &:hover {
    background-color: ${backgroundBlue};
    color: ${textLight};
  }
`;

export const RowTitle = styled.span`
  font-size: 1.4rem;
  margin-right: 20px;
`;

export const ChevronWrapper = styled.div`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
`;

export const OpenDropdownContainer = styled(ClosedDropdownContainer)`
  position: absolute;
  z-index: 9999;
  overflow: hidden;
  border-color: ${borderLight};
`;
