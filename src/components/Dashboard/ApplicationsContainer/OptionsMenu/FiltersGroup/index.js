import React, { useState, useContext } from "react";
import { connect } from "react-redux";

import { ApplicationsContext } from "../../ApplicationsContext";

import Chevron from "../../../../../assets/Chevron";
import Expand from "../../../../../assets/Expand";
import Plus from "../../../../../assets/Plus";
import Minus from "../../../../../assets/Minus";

import colors from "../../../../../styles/theme";
import {
  OptionGroup,
  OptionGroupTitle,
  OptionGroupTitleControl,
  OptionItemsGroup,
  FilterGroups,
  FilterGroupTitle,
  FilterSubGroup,
  FilterItemTitle,
  FilterSubItem
} from "../styles";

import { Checkbox } from "../../../../../styles/forms2";

function FiltersGroup(props) {
  const [filterGroupOpen, setFilterGroupOpen] = useState(false);
  const [positionsOpen, setPositionsOpen] = useState(false);
  // const [locationsOpen, setLocationsOpen] = useState(false);
  const appContext = useContext(ApplicationsContext);
  return (
    <OptionGroup>
      <OptionGroupTitle onClick={() => setFilterGroupOpen(!filterGroupOpen)}>
        Filters
        <OptionGroupTitleControl>
          {filterGroupOpen ? <Minus /> : <Plus />}
        </OptionGroupTitleControl>
      </OptionGroupTitle>
      <OptionItemsGroup open={filterGroupOpen}>
        {props.business.subBusinesses.length > 0 && (
          <FilterGroups open={filterGroupOpen}>
            <FilterGroupTitle>
              <Chevron width="14px" height="14px" color={colors.textDark} />
              Locations
            </FilterGroupTitle>
          </FilterGroups>
        )}
        {props.business.positions.length > 0 && (
          <FilterGroups open={filterGroupOpen} subGroupOpen={positionsOpen}>
            <FilterGroupTitle
              onClick={e => setPositionsOpen(!positionsOpen)}
              subGroupOpen={positionsOpen}
            >
              <Chevron width="14px" height="14px" color={colors.textDark} />
              Positions
            </FilterGroupTitle>
            {positionsOpen && (
              <FilterSubGroup subGroupOpen={positionsOpen}>
                {appContext.positions.map(position => {
                  let selected =
                    appContext.selectedPositions.indexOf(position.id) >= 0;
                  return (
                    <FilterSubItem
                      subGroupOpen={positionsOpen}
                      key={position.id}
                    >
                      <FilterItemTitle>
                        <Checkbox
                          style={{ marginRight: "10px" }}
                          name={position.name}
                          checked={selected}
                          onChange={e => appContext.selectPosition(position.id)}
                        />
                        <label htmlFor={position.name}>{position.name}</label>
                      </FilterItemTitle>
                    </FilterSubItem>
                  );
                })}
              </FilterSubGroup>
            )}
          </FilterGroups>
        )}
        <FilterGroups open={filterGroupOpen}>
          <FilterGroupTitle
            onClick={e => appContext.setAvailabilityFilterOpen(true)}
          >
            <Expand width="16px" height="16px" />
            Availability
          </FilterGroupTitle>
        </FilterGroups>
      </OptionItemsGroup>
    </OptionGroup>
  );
}

export default connect(
  state => ({ business: state.business }),
  null
)(FiltersGroup);
