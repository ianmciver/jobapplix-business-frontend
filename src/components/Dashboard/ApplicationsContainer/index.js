import React, { useState } from "react";

import ApplicationsProvider from "./ApplicationsContext";
import ApplicationsTabs from "./ApplicationsTabs";
import ApplicationsTable from "./ApplicationsTable";
// import SearchBar from "./SearchBar";
import Filters from "./Filters";
import Header from "../Header";
import {
  ApplicationsContainer,
  ApplicationsTitle,
  FeaturesButton,
  FeaturesGroup,
  FeaturesGroupContainer
} from "./styles";

export default function Applications() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // const toggleSearch = () => {
  //   if (filtersOpen) {
  //     setFiltersOpen(false);
  //   }
  //   setSearchOpen(!searchOpen);
  // };

  const toggleFilters = () => {
    if (searchOpen) {
      setSearchOpen(false);
    }
    setFiltersOpen(!filtersOpen);
  };
  return (
    <ApplicationsProvider>
      <Header />
      <FeaturesGroupContainer>
        <FeaturesGroup>
          <FeaturesButton onClick={toggleFilters} selected={filtersOpen}>
            Filters
          </FeaturesButton>
          {/* <FeaturesButton onClick={toggleSearch}>Search</FeaturesButton> */}
        </FeaturesGroup>
      </FeaturesGroupContainer>
      {/* {searchOpen && <SearchBar />} */}
      {filtersOpen && <Filters closeMenu={toggleFilters} />}

      <ApplicationsContainer>
        <ApplicationsTitle>Applications</ApplicationsTitle>
        <ApplicationsTabs />
        <ApplicationsTable />
      </ApplicationsContainer>
    </ApplicationsProvider>
  );
}
