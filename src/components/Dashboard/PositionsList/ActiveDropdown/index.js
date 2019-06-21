import React, { useState } from "react";

import Chevron from "../../../../assets/Chevron";
import {
  ChevronWrapper,
  MultiSelector,
  MultiWindow,
  MultiList,
  MultiOption
} from "./styles";

import { ModalContainer } from "../../Menus/styles";

import { chevronDropDown } from "../../../../constants/colors";
export default function GroupsDropdown(props) {
  const [open, setOpen] = useState(false);
  const selectOption = option => {
    props.selectHandler(option);
    setOpen(false);
  };
  const optionIndex = props.options.findIndex(option => {
    return option === props.value;
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
          valueIndex={optionIndex}
          onClick={() => setOpen(false)}
          length={props.options.length}
        >
          {props.options.map(option => {
            return (
              <MultiOption key={option} onClick={e => selectOption(option)}>
                {option}
              </MultiOption>
            );
          })}
        </MultiList>
      </MultiSelector>
    </>
  );
}
