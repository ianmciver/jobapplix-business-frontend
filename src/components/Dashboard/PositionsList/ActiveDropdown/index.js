import React, { useState } from "react";
import { connect } from "react-redux";
import Chevron from "../../../../assets/Chevron";
import { chevronDropDown } from "../../../../constants/colors";

import { updatePosition } from "../../../../actions/businessActions";

import {
  DropDownContainer,
  ClosedDropdownContainer,
  ActiveRow,
  ChevronWrapper,
  RowTitle,
  OpenDropdownContainer
} from "./styles";

function ActiveDropdown(props) {
  const [open, setOpen] = useState(false);

  const selectOption = option => e => {
    if (props.active !== option) {
      props.updatePosition(props.positionId, { active: option });
    }
    setOpen(false);
  };
  return (
    <DropDownContainer>
      {open ? (
        <OpenDropdownContainer>
          <ActiveRow onClick={selectOption(true)}>
            <RowTitle>Active</RowTitle>
          </ActiveRow>
          <ActiveRow onClick={selectOption(false)}>
            <RowTitle>Not Active</RowTitle>
          </ActiveRow>
        </OpenDropdownContainer>
      ) : (
        <ClosedDropdownContainer onClick={e => setOpen(true)}>
          <ActiveRow>
            <RowTitle>{props.active ? "Active" : "Not Active"}</RowTitle>
            <ChevronWrapper>
              <Chevron width={"16px"} height={"16px"} color={chevronDropDown} />
            </ChevronWrapper>
          </ActiveRow>
        </ClosedDropdownContainer>
      )}
    </DropDownContainer>
  );
}

export default connect(
  null,
  { updatePosition }
)(ActiveDropdown);
