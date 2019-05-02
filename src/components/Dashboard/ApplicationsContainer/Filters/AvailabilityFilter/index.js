import React, { useState, useEffect, useContext } from "react";

import { ApplicationsContext } from "../../ApplicationsContext";

import {
  AvailabilityChart,
  GridItem
} from "../../ApplicationsTable/ExpandedApplication/Availability/styles";
import { RowTitle, SelectorBox } from "./styles";

export default function PositionsFilter(props) {
  const appContext = useContext(ApplicationsContext);
  const {
    mon_first,
    mon_second,
    mon_third,
    tues_first,
    tues_second,
    tues_third,
    wed_first,
    wed_second,
    wed_third,
    thurs_first,
    thurs_second,
    thurs_third,
    fri_first,
    fri_second,
    fri_third,
    sat_first,
    sat_second,
    sat_third,
    sun_first,
    sun_second,
    sun_third
  } = appContext.availabilityFilter;
  return (
    <AvailabilityChart>
      <GridItem align={"flex-start"} column={1} columnEnd={5} row={1}>
        <RowTitle>Select Shifts to Filter By:</RowTitle>
      </GridItem>

      <GridItem align={"flex-start"} column={1} row={2}>
        <RowTitle>Mon:</RowTitle>
      </GridItem>
      <GridItem align={"center"} column={2} row={2}>
        <SelectorBox
          selected={mon_first}
          onClick={() => appContext.toggleAvailability("mon_first")}
        >
          SHIFT 2
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={3} row={2}>
        <SelectorBox
          selected={mon_second}
          onClick={() => appContext.toggleAvailability("mon_second")}
        >
          SHIFT 2
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={4} row={2}>
        <SelectorBox
          selected={mon_third}
          onClick={() => appContext.toggleAvailability("mon_third")}
        >
          SHIFT 3
        </SelectorBox>
      </GridItem>

      <GridItem align={"flex-start"} column={1} row={3}>
        <RowTitle>Tue:</RowTitle>
      </GridItem>
      <GridItem align={"center"} column={2} row={3}>
        <SelectorBox
          selected={tues_first}
          onClick={() => appContext.toggleAvailability("tues_first")}
        >
          SHIFT 3
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={3} row={3}>
        <SelectorBox
          selected={tues_second}
          onClick={() => appContext.toggleAvailability("tues_second")}
        >
          SHIFT 2
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={4} row={3}>
        <SelectorBox
          selected={tues_third}
          onClick={() => appContext.toggleAvailability("tues_third")}
        >
          SHIFT 3
        </SelectorBox>
      </GridItem>

      <GridItem align={"flex-start"} column={1} row={4}>
        <RowTitle>Wed:</RowTitle>
      </GridItem>
      <GridItem align={"center"} column={2} row={4}>
        <SelectorBox
          selected={wed_first}
          onClick={() => appContext.toggleAvailability("wed_first")}
        >
          SHIFT 4
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={3} row={4}>
        <SelectorBox
          selected={wed_second}
          onClick={() => appContext.toggleAvailability("wed_second")}
        >
          SHIFT 2
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={4} row={4}>
        <SelectorBox
          selected={wed_third}
          onClick={() => appContext.toggleAvailability("wed_third")}
        >
          SHIFT 3
        </SelectorBox>
      </GridItem>

      <GridItem align={"flex-start"} column={1} row={5}>
        <RowTitle>Thu:</RowTitle>
      </GridItem>
      <GridItem align={"center"} column={2} row={5}>
        <SelectorBox
          selected={thurs_first}
          onClick={() => appContext.toggleAvailability("thurs_first")}
        >
          SHIFT 5
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={3} row={5}>
        <SelectorBox
          selected={thurs_second}
          onClick={() => appContext.toggleAvailability("thurs_second")}
        >
          SHIFT 2
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={4} row={5}>
        <SelectorBox
          selected={thurs_third}
          onClick={() => appContext.toggleAvailability("thurs_third")}
        >
          SHIFT 3
        </SelectorBox>
      </GridItem>

      <GridItem align={"flex-start"} column={1} row={6}>
        <RowTitle>Fri:</RowTitle>
      </GridItem>
      <GridItem align={"center"} column={2} row={6}>
        <SelectorBox
          selected={fri_first}
          onClick={() => appContext.toggleAvailability("fri_first")}
        >
          SHIFT 6
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={3} row={6}>
        <SelectorBox
          selected={fri_second}
          onClick={() => appContext.toggleAvailability("fri_second")}
        >
          SHIFT 2
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={4} row={6}>
        <SelectorBox
          selected={fri_third}
          onClick={() => appContext.toggleAvailability("fri_third")}
        >
          SHIFT 3
        </SelectorBox>
      </GridItem>

      <GridItem align={"flex-start"} column={1} row={7}>
        <RowTitle>Sat:</RowTitle>
      </GridItem>
      <GridItem align={"center"} column={2} row={7}>
        <SelectorBox
          selected={sat_first}
          onClick={() => appContext.toggleAvailability("sat_first")}
        >
          SHIFT 7
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={3} row={7}>
        <SelectorBox
          selected={sat_second}
          onClick={() => appContext.toggleAvailability("sat_second")}
        >
          SHIFT 2
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={4} row={7}>
        <SelectorBox
          selected={sat_third}
          onClick={() => appContext.toggleAvailability("sat_third")}
        >
          SHIFT 3
        </SelectorBox>
      </GridItem>

      <GridItem align={"flex-start"} column={1} row={8}>
        <RowTitle>Sun:</RowTitle>
      </GridItem>
      <GridItem align={"center"} column={2} row={8}>
        <SelectorBox
          selected={sun_first}
          onClick={() => appContext.toggleAvailability("sun_first")}
        >
          SHIFT 8
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={3} row={8}>
        <SelectorBox
          selected={sun_second}
          onClick={() => appContext.toggleAvailability("sun_second")}
        >
          SHIFT 2
        </SelectorBox>
      </GridItem>
      <GridItem align={"center"} column={4} row={8}>
        <SelectorBox
          selected={sun_third}
          onClick={() => appContext.toggleAvailability("sun_third")}
        >
          SHIFT 3
        </SelectorBox>
      </GridItem>
    </AvailabilityChart>
  );
}
