import React from "react";

import {
  ApplicationsGroupColumnOne,
  ApplicationsGroupColumnTwo,
  ApplicationsGroupColumnThree,
  ApplicationsGroupColumnFour,
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
        <ApplicationsGroupColumnTitle>
          {typeof props.colOne === "function" ? props.colTwo() : props.colTwo}
        </ApplicationsGroupColumnTitle>
      </ApplicationsGroupColumnTwo>

      <ApplicationsGroupColumnThree>
        <ApplicationsGroupColumnTitle center={"center"}>
          {typeof props.colThree === "function"
            ? props.colThree()
            : props.colThree}
        </ApplicationsGroupColumnTitle>
      </ApplicationsGroupColumnThree>

      <ApplicationsGroupColumnFour>
        <ApplicationsGroupColumnTitle center={"center"}>
          {typeof props.colThree === "function"
            ? props.colFour()
            : props.colFour}
        </ApplicationsGroupColumnTitle>
      </ApplicationsGroupColumnFour>
    </ApplicationRowContainer>
  );
}
