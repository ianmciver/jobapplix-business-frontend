import styled, { css } from "styled-components";
import { lighten } from "polished";

import { media } from "../../../../../styles/mediaQueries";
export const DropdownContainer = styled.div`
  width: 250px;
  border: 1px solid ${props => props.theme.backgroundNoteBox};
  background-color: ${props => lighten(0.1, props.theme.backgroundGrey)};
  position: absolute;
  top: 100px;
  left: -1px;
  z-index: 2000;

  ${media.desktop`
    top: 50px;
    left: 0;
  `};
`;
