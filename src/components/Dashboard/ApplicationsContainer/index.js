import React, { useState } from "react";

import ApplicationsProvider from "./ApplicationsContext";
import ApplicationsTabs from "./ApplicationsTabs";
import ApplicationsTable from "./ApplicationsTable";
// import SearchBar from "./SearchBar";
import Filters from "./Filters";
import Header from "../Header";
import OptionsMenu from "./OptionsMenu";
import { ApplicationsContainer, ApplicationsTitle } from "./styles";

export default function Applications() {
  return (
    <ApplicationsProvider>
      <OptionsMenu />
      <Header />

      <ApplicationsContainer>
        <ApplicationsTitle>Applications</ApplicationsTitle>
        <ApplicationsTable />
      </ApplicationsContainer>
    </ApplicationsProvider>
  );
}
