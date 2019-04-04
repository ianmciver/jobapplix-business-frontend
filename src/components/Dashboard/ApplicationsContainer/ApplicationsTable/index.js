import React from "react";

import {
  ApplicationsGroup,
  ApplicationsGroupHead,
  ApplicationsGroupColumnOne,
  ApplicationsGroupColumnTwo,
  ApplicationsGroupColumnThree,
  ApplicationsGroupColumnTitle
} from "./styles";
import { applyMiddleware } from "../../../../../../../Library/Caches/typescript/3.3/node_modules/redux";

export default function ApplicationsTable(props) {
  return (
    <ApplicationsGroup>
      <ApplicationsGroupHead>
        <ApplicationsGroupColumnOne>
          <ApplicationsGroupColumnTitle>Name</ApplicationsGroupColumnTitle>
        </ApplicationsGroupColumnOne>
        <ApplicationsGroupColumnTwo>
          <ApplicationsGroupColumnTitle>Group</ApplicationsGroupColumnTitle>
        </ApplicationsGroupColumnTwo>
        <ApplicationsGroupColumnThree>
          <ApplicationsGroupColumnTitle>Details</ApplicationsGroupColumnTitle>
        </ApplicationsGroupColumnThree>
      </ApplicationsGroupHead>
    </ApplicationsGroup>
  );
}

// name: 169 40.8%, group 145.7 35.2%, details 99.36 (24%)
// name, position, group, email, date applied , details
