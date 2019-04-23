import React, { useState } from "react";
import Chevron from "../../../assets/Chevron";
import { textDark } from "../../../constants/colors";
import {
  DropdownContainer,
  DropdownValue,
  DropdownListContainer,
  DropdownListItem
} from "./styles";

export default function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const optionClick = index => e => {
    setOpen(!open);
    props.selectItem(index);
  };
  const top = props.valueIndex * 24;
  return (
    <>
      <DropdownContainer>
        <DropdownValue
          onClick={e => {
            setOpen(!open);
          }}
        >
          {props.value}
        </DropdownValue>
        <Chevron
          height="12px"
          width="6px"
          color={textDark}
          onClick={e => {
            setOpen(!open);
          }}
        />
        {open && (
          <DropdownListContainer top={top + 2}>
            <ul>
              {props.options.map((item, index) => {
                return (
                  <DropdownListItem
                    onClick={optionClick(index)}
                    selected={props.value === item}
                    key={index}
                  >
                    {item}
                  </DropdownListItem>
                );
              })}
            </ul>
          </DropdownListContainer>
        )}
      </DropdownContainer>
    </>
  );
}
