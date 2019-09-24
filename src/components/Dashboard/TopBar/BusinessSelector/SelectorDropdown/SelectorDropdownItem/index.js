import React from "react";
import { ItemContainer, LogoContainer, BusinessName } from "./styles";
export default function SelectorDropdownItem(props) {
  return (
    <ItemContainer>
      <LogoContainer createNew={props.createNew} image={props.image}>
        {props.createNew && "+"}
      </LogoContainer>
      <BusinessName>
        {props.createNew ? "Create New Business" : props.text}
      </BusinessName>
    </ItemContainer>
  );
}
