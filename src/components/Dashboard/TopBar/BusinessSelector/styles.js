import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

import { media } from "../../../../styles/mediaQueries";

export const MobileOff = styled.div`
  display: none;
  ${media.desktop`
    display: initial;
  `};
`;
export const BusinessSelectorContainer = styled.div`
  width: 250px;
  height: 50px;
  border-top: 1px solid ${props => props.theme.backgroundNoteBox};
  border-bottom: 1px solid ${props => props.theme.backgroundNoteBox};
  background-color: ${props => props.theme.backgroundNoteBox};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  align-self: flex-end;

  ${media.desktop`
    position: absolute;
    top: 0;
    left: 95px;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid ${props => props.theme.backgroundNoteBox};
    border-right: 1px solid ${props => props.theme.backgroundNoteBox};
  `}
`;

export const OpenSelector = styled.div`
  transform: rotate(${props => (props.open ? "-90deg" : "90deg")});
  transition: transform 500ms;
  margin-left: 10px;
`;

export const LogoContainer = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid ${props => props.theme.backgroundQuestion};
  border-radius: 7px;
  background-color: ${props => props.theme.backgroundWhite};
  background-image: ${props => props.image && css`url(${props.image})`};
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
`;

export const BusinessName = styled.h3`
  color: ${props => props.theme.textLight};
  font-size: 1.6rem;
  width: 175px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
