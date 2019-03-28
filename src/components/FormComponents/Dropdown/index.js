import React, { useState } from "react";

import {
  DropdownContainer,
  DropdownValue,
  DropdownListContainer,
  DropdownList,
  DropdownListItem
} from "./styles";

export default function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const optionClick = value => e => {
    setOpen(!open);
    props.selectItem(value);
  };
  return (
    <>
      <DropdownContainer>
        <DropdownValue onClick={e => setOpen(!open)}>
          {props.value}
        </DropdownValue>
        {open && (
          <DropdownListContainer top={props.valueIndex * 34}>
            <DropdownList>
              {props.options.map((item, index) => {
                return (
                  <DropdownListItem
                    onClick={optionClick(item)}
                    selected={props.value === item.split(" ")[0]}
                    key={index}
                  >
                    {item}
                  </DropdownListItem>
                );
              })}
            </DropdownList>
          </DropdownListContainer>
        )}
      </DropdownContainer>
    </>
  );
}
