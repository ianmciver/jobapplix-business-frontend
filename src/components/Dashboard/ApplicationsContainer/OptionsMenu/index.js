import React, { useState, useEffect, useContext } from "react";
import { Transition } from "react-transition-group";

import AvailabilityFilter from "./FiltersGroup/AvailabilityFilter";

import { ApplicationsContext } from "../ApplicationsContext";
import Filter from "../../../../assets/Filter";
import Arrow from "../../../../assets/Arrow";
import Plus from "../../../../assets/Plus";
import Minus from "../../../../assets/Minus";

import FiltersGroup from "./FiltersGroup";

import {
  OptionsMenuContainer,
  OptionGroup,
  OptionGroupTitle,
  OptionItemsGroup,
  OptionItem,
  OptionItemTitle,
  OptionGroupTitleControl,
  Control
} from "./styles";

export default function OptionsMenu(props) {
  const [showMenu, setShowMenu] = useState(true);
  const [enter, setEnter] = useState(false);

  const [appGroupOpen, setAppGroupOpen] = useState(true);
  const applicationContext = useContext(ApplicationsContext);
  const clickHandler = id => e => {
    applicationContext.setGroupSelected(id);
  };
  useEffect(() => {
    setEnter(true);
  }, []);
  return (
    <>
      <Transition in={enter} timeout={{ enter: 500, exit: 0 }}>
        {state => (
          <OptionsMenuContainer showMenu={showMenu} state={state}>
            <Control onClick={e => setShowMenu(!showMenu)}>
              <Filter />
            </Control>
            <OptionGroup>
              <OptionGroupTitle onClick={() => setAppGroupOpen(!appGroupOpen)}>
                Application Groups
                <OptionGroupTitleControl>
                  {appGroupOpen ? <Minus /> : <Plus />}
                </OptionGroupTitleControl>
              </OptionGroupTitle>
              <OptionItemsGroup open={appGroupOpen}>
                {applicationContext.groups.map(tab => (
                  <OptionItem
                    key={tab.id}
                    selected={applicationContext.selectedGroupId === tab.id}
                    onClick={clickHandler(tab.id)}
                    open={appGroupOpen}
                  >
                    <OptionItemTitle>{tab.title}</OptionItemTitle>
                    {applicationContext.selectedGroupId === tab.id && <Arrow />}
                  </OptionItem>
                ))}
              </OptionItemsGroup>
            </OptionGroup>
            <FiltersGroup />
          </OptionsMenuContainer>
        )}
      </Transition>
      {applicationContext.availabilityFilterOpen && <AvailabilityFilter />}
    </>
  );
}
