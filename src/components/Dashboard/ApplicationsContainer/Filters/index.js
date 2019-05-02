import React, { useState, useEffect, useContext } from "react";

import FilterContainer from "./FilterContainer";
import PositionsFilter from "./PositionsFilter";
import AvailabilityFilter from "./AvailabilityFilter";

import { FiltersContainer, Instructions } from "./styles";

export default function Filters(props) {
  return (
    <FiltersContainer>
      <Instructions>Filter Applications by:</Instructions>
      <FilterContainer title="Positions">
        <PositionsFilter />
      </FilterContainer>
      <FilterContainer title="Availability">
        <AvailabilityFilter />
      </FilterContainer>
    </FiltersContainer>
  );
}
