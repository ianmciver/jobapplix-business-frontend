import React from "react";
import { connect } from "react-redux";

import ApplicationsTabs from "./ApplicationsTabs";
import ApplicationsTable from "./ApplicationsTable";
import {
  ApplicationsContainer,
  ApplicationsTitle,
  FeaturesButton,
  FeaturesGroup
} from "./styles";

function Applications(props) {
  return (
    <>
      <FeaturesGroup>
        <FeaturesButton>Filters</FeaturesButton>
        <FeaturesButton>Search</FeaturesButton>
      </FeaturesGroup>

      <ApplicationsContainer>
        <ApplicationsTitle>Applications</ApplicationsTitle>
      </ApplicationsContainer>
      <ApplicationsTabs />
      <ApplicationsTable />
    </>
  );
}

export default connect()(Applications);
