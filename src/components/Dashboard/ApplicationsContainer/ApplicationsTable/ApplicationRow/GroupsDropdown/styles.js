import styled from "styled-components";

import {
  backgroundAppTable,
  backgroundBlue,
  textLight,
  borderLight
} from "../../../../../../constants/colors";

export const GroupsContainer = styled.div`
  border: 1px solid ${backgroundAppTable};
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  overflow: hidden;
`;

export const GroupsRow = styled.div`
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
  font-size: 1.2rem;
`;

export const OpenGroupsContainer = styled(GroupsContainer)`
  position: absolute;
  top: -13px;
  z-index: 9999;
  overflow: hidden;
  border-color: ${borderLight};
`;

export const ChevronWrapper = styled.div`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
`;
