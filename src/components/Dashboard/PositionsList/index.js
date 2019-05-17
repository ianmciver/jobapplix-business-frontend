import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ActiveDropdown from "./ActiveDropdown";

import CheckBoxCheck from "../../../assets/checkboxCheck";

import {
  dashboard,
  updatePositionUrl,
  createPosition
} from "../../../constants/routes";

import {
  PositionsListContainer,
  PositionsListTitle,
  PositionsListDescription,
  PositionTable,
  PositionContainer,
  PositionName,
  UpdateLink,
  CreateButton,
  UpdateAndActive
} from "./styles";

import { updatePosition } from "../../../actions/businessActions";

const options = ["Active", "Not Active"];

function PositionsList(props) {
  const selectOption = (positionId, active) => option => {
    let activeOption = option === "Active" ? true : false;
    if (active !== activeOption) {
      props.updatePosition(positionId, { active: activeOption });
    }
  };
  console.log(props.business.positions);
  return (
    <PositionsListContainer>
      <PositionsListTitle>Positions</PositionsListTitle>
      <PositionsListDescription>
        Here you will find a list of positions you have already created. You may
        activate or deactivate a position at any time. By default new positions
        are automatically activated. You may also update your position and it's
        custom application at any time simply by clicking the update option on
        each position.
      </PositionsListDescription>
      <CreateButton
        onClick={e => props.history.push(`${dashboard}${createPosition}`)}
      >
        <CheckBoxCheck /> <span>Create a new position</span>
      </CreateButton>
      <PositionTable>
        {props.business.positions.map(pos => {
          return (
            <PositionContainer key={pos.id}>
              <PositionName>{pos.name}</PositionName>
              <UpdateAndActive>
                <Link to={`${dashboard}${updatePositionUrl}/${pos.id}`}>
                  <UpdateLink>Update</UpdateLink>
                </Link>
                <ActiveDropdown
                  options={options}
                  value={pos.active ? "Active" : "Not Active"}
                  selectHandler={selectOption(pos.id, pos.active)}
                />
              </UpdateAndActive>
            </PositionContainer>
          );
        })}
      </PositionTable>
    </PositionsListContainer>
  );
}

export default connect(
  state => ({ business: state.business }),
  { updatePosition }
)(PositionsList);
