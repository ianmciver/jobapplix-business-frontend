import React from "react";

import {
  ApplicationsGroupColumnOne,
  ApplicationsGroupColumnTwo,
  ApplicationsGroupColumnThree,
  ApplicationsGroupColumnTitle,
  ApplicationRowContainer
} from "./styles";

export default function ApplicationRow(props) {
  return (
    <ApplicationRowContainer>
      <ApplicationsGroupColumnOne>
        <ApplicationsGroupColumnTitle>
          {typeof props.colOne === "function" ? props.colOne() : props.colOne}
        </ApplicationsGroupColumnTitle>
      </ApplicationsGroupColumnOne>
      <ApplicationsGroupColumnTwo>
        <ApplicationsGroupColumnTitle center={"center"}>
          {typeof props.colTwo === "function" ? props.colTwo() : props.colTwo}
        </ApplicationsGroupColumnTitle>
      </ApplicationsGroupColumnTwo>
      <ApplicationsGroupColumnThree>
        <ApplicationsGroupColumnTitle center={"center"}>
          {typeof props.colThree === "function"
            ? props.colThree()
            : props.colThree}
        </ApplicationsGroupColumnTitle>
      </ApplicationsGroupColumnThree>
    </ApplicationRowContainer>
  );
}
