import React from "react";

import FilterContainer from "./FilterContainer";
import PositionsFilter from "./PositionsFilter";
import AvailabilityFilter from "./AvailabilityFilter";

import { FiltersModal, FiltersContainer, Instructions } from "./styles";

export default function Filters(props) {
  return (
    <FiltersModal onClick={e => props.closeMenu()}>
      <FiltersContainer onClick={e => e.stopPropagation()}>
        <Instructions>Filter Applications by:</Instructions>
        <FilterContainer title="Positions">
          <PositionsFilter />
        </FilterContainer>
        <FilterContainer title="Availability">
          <AvailabilityFilter />
        </FilterContainer>
      </FiltersContainer>
    </FiltersModal>
  );
}
