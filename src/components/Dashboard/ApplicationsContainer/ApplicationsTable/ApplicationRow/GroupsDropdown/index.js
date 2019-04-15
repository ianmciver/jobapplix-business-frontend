import React, { useState, useContext } from "react";

import Chevron from "../../../../../../assets/Chevron";
import { ApplicationsContext } from "../../../ApplicationsContext";
import {
  GroupsContainer,
  OpenGroupsContainer,
  GroupsRow,
  RowTitle,
  ChevronWrapper
} from "./styles";

import { chevronDropDown } from "../../../../../../constants/colors";
export default function GroupsDropdown(props) {
  const [open, setOpen] = useState(false);
  const applicationsContext = useContext(ApplicationsContext);
  const selectGroup = id => e => {
    setOpen(false);
    applicationsContext.changeApplicationGroup(props.appId, id);
  };

  return (
    <>
      {open ? (
        <OpenGroupsContainer>
          {applicationsContext.groups
            .filter(item => {
              return item.id !== 1000 && item.id !== 0;
            })
            .map(group => {
              return (
                <GroupsRow key={group.id} onClick={selectGroup(group.id)}>
                  {group.title}
                </GroupsRow>
              );
            })}
        </OpenGroupsContainer>
      ) : (
        <GroupsContainer>
          <GroupsRow
            onClick={() => {
              setOpen(true);
            }}
          >
            <RowTitle>{props.selected}</RowTitle>
            <ChevronWrapper>
              <Chevron width={"16px"} height={"16px"} color={chevronDropDown} />
            </ChevronWrapper>
          </GroupsRow>
        </GroupsContainer>
      )}
    </>
  );
}
