import React from "react";

import ApplicationsProvider from "./ApplicationsContext";
import ApplicationsTable from "./ApplicationsTable";
import OptionsMenu from "./OptionsMenu";
import { ApplicationsContainer, ApplicationsTitle } from "./styles";

export default function Applications() {
  return (
    <ApplicationsProvider>
      <OptionsMenu />

      <ApplicationsContainer>
        <ApplicationsTitle>Applications</ApplicationsTitle>
        <ApplicationsTable />
      </ApplicationsContainer>
    </ApplicationsProvider>
  );
}
