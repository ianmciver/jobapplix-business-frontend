import React, { useState, useContext } from "react";

import Chevron from "../../../../../../assets/Chevron";
import { ApplicationsContext } from "../../../ApplicationsContext";
import {
  ChevronWrapper,
  MultiSelector,
  MultiWindow,
  MultiList,
  MultiOption
} from "./styles";

import { ModalContainer } from "../../../../Menus/styles";

import { chevronDropDown } from "../../../../../../constants/colors";
export default function GroupsDropdown(props) {
  const [open, setOpen] = useState(false);
  const applicationsContext = useContext(ApplicationsContext);
  const selectGroup = id => e => {
    setOpen(false);
    applicationsContext.changeApplicationGroup(props.appId, id);
  };
  const selectedGroupIndex = applicationsContext.groups.findIndex(group => {
    return group.title === props.selected;
  });

  return (
    <>
      <ModalContainer show={open} onClick={() => setOpen(false)} />
      <MultiSelector open={open}>
        <MultiWindow open={open} onClick={() => setOpen(true)}>
          <ChevronWrapper>
            <Chevron width={"16px"} height={"16px"} color={chevronDropDown} />
          </ChevronWrapper>
        </MultiWindow>
        <MultiList
          open={open}
          valueIndex={selectedGroupIndex}
          onClick={() => setOpen(false)}
          length={applicationsContext.groups.length - 1}
        >
          {applicationsContext.groups
            .filter(item => {
              return item.id !== 1000;
            })
            .map(group => {
              return (
                <MultiOption key={group.id} onClick={selectGroup(group.id)}>
                  {group.title}
                </MultiOption>
              );
            })}
        </MultiList>
      </MultiSelector>
    </>
  );
}
