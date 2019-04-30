import React, { useState } from "react";
import Chevron from "../../../../assets/Chevron";
import { chevronDropDown } from "../../../../constants/colors";

import {
  DropDownContainer,
  ClosedDropdownContainer,
  ActiveRow,
  ChevronWrapper,
  RowTitle,
  OpenDropdownContainer
} from "./styles";

export default function ActiveDropdown(props) {
  const [open, setOpen] = useState(false);

  const selectOption = option => {
    props.selectHandler(option);
    setOpen(false);
  };
  return (
    <DropDownContainer>
      {open ? (
        <OpenDropdownContainer>
          {props.options.map(option => {
            return (
              <ActiveRow key={option} onClick={e => selectOption(option)}>
                <RowTitle>{option}</RowTitle>
              </ActiveRow>
            );
          })}
        </OpenDropdownContainer>
      ) : (
        <ClosedDropdownContainer onClick={e => setOpen(true)}>
          <ActiveRow>
            <RowTitle>{props.value}</RowTitle>
            <ChevronWrapper>
              <Chevron width={"16px"} height={"16px"} color={chevronDropDown} />
            </ChevronWrapper>
          </ActiveRow>
        </ClosedDropdownContainer>
      )}
    </DropDownContainer>
  );
}
