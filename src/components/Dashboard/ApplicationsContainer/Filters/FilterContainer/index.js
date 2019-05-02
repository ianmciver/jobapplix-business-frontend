import React, { useState } from "react";

import Chevron from "../../../../../assets/Chevron";
import {
  FilterTypeContainer,
  FilterTypeTitle,
  FilterTypeControl,
  FilterNameContainer,
  FilterBodyContainer
} from "../styles";

export default function FilterContainer(props) {
  const [open, setOpen] = useState(false);
  return (
    <FilterTypeContainer>
      <FilterNameContainer>
        <FilterTypeTitle>{props.title}</FilterTypeTitle>
        <FilterTypeControl onClick={e => setOpen(!open)} open={open}>
          <Chevron width="20px" height="20px" color="white" />
        </FilterTypeControl>
      </FilterNameContainer>
      {open && <FilterBodyContainer>{props.children}</FilterBodyContainer>}
    </FilterTypeContainer>
  );
}
