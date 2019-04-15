import React, { useState } from "react";
import { connect } from "react-redux";

import ActiveDropdown from "./ActiveDropdown";

import {
  PositionsListContainer,
  PositionsListTitle,
  PositionsListDescription,
  PositionTable,
  PositionContainer,
  PositionName
} from "./styles";

function PositionsList(props) {
  console.log(props.business.positions);
  return (
    <PositionsListContainer>
      <PositionsListTitle>Positions</PositionsListTitle>
      <PositionsListDescription>
        Here you will find a list of positions you have already created. You may
        activate or deactivate a position at any time. By default new positions
        are automatically activated. You may also update your position, and it's
        custom application at any time simply by clicking the update option on
        each position.
      </PositionsListDescription>
      <PositionTable>
        {props.business.positions.map(pos => {
          return (
            <PositionContainer key={pos.id}>
              <PositionName>{pos.name}</PositionName>
              <ActiveDropdown active={pos.active} positionId={pos.id} />
            </PositionContainer>
          );
        })}
      </PositionTable>
    </PositionsListContainer>
  );
}

export default connect(state => ({ business: state.business }))(PositionsList);
