import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ActiveDropdown from "./ActiveDropdown";

import { dashboard, updatePosition } from "../../../constants/routes";

import {
  PositionsListContainer,
  PositionsListTitle,
  PositionsListDescription,
  PositionTable,
  PositionContainer,
  PositionName,
  UpdateLink
} from "./styles";

function PositionsList(props) {
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
              <Link to={`${dashboard}${updatePosition}/${pos.id}`}>
                <UpdateLink>Update</UpdateLink>
              </Link>
              <ActiveDropdown active={pos.active} positionId={pos.id} />
            </PositionContainer>
          );
        })}
      </PositionTable>
    </PositionsListContainer>
  );
}

export default connect(state => ({ business: state.business }))(PositionsList);
