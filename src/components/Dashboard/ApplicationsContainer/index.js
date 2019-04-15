import React from "react";

import ApplicationsProvider from "./ApplicationsContext";
import ApplicationsTabs from "./ApplicationsTabs";
import ApplicationsTable from "./ApplicationsTable";
import Header from "../Header";
import {
  ApplicationsContainer,
  ApplicationsTitle,
  FeaturesButton,
  FeaturesGroup
} from "./styles";

export default function Applications() {
  return (
    <ApplicationsProvider>
      <Header />
      <FeaturesGroup>
        <FeaturesButton>Filters</FeaturesButton>
        <FeaturesButton>Search</FeaturesButton>
      </FeaturesGroup>

      <ApplicationsContainer>
        <ApplicationsTitle>Applications</ApplicationsTitle>
      </ApplicationsContainer>
      <ApplicationsTabs />
      <ApplicationsTable />
    </ApplicationsProvider>
  );
}
