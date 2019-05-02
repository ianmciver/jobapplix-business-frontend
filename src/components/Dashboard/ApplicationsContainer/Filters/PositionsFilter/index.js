import React, { useState, useEffect, useContext } from "react";
import { ApplicationsContext } from "../../ApplicationsContext";
import { PositionContainer, PositionCheckBox, PositionName } from "./styles";
import CheckBoxCheck from "../../../../../assets/checkboxCheck";

export default function PositionsFilter(props) {
  const appContext = useContext(ApplicationsContext);
  return (
    <>
      {appContext.positions.map(pos => {
        let selected = appContext.selectedPositions.indexOf(pos.id) >= 0;
        return (
          <PositionContainer key={pos.id}>
            <PositionCheckBox onClick={e => appContext.selectPosition(pos.id)}>
              {selected && <CheckBoxCheck />}
            </PositionCheckBox>
            <PositionName>{pos.name}</PositionName>
          </PositionContainer>
        );
      })}
    </>
  );
}
