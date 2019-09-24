import styled, { css } from "styled-components";
import { darken, transparentize, lighten } from "polished";

import { media } from "../../../../styles/mediaQueries";
import { Checkbox } from "../../../../styles/forms2";

export const OptionsMenuContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 250px;
  box-shadow: 1px 0 10px -5px rgba(0, 0, 0, 0.3);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;
  ${props =>
    props.showMenu
      ? css`
          left: -250px;
        `
      : css`
          left: 0px;
        `}
  ${media.desktop`
    left: 95px;
    transform: ${props =>
      props.state === "entering" || props.state === "entered"
        ? css`translateX(0)`
        : css`translateX(-250px)`};
    transition: transform 300ms;
  `}
`;

export const Control = styled.div`
  width: 50px;
  height: 70px;
  background-color: white;
  position: absolute;
  top: 70px;
  left: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 0 10px 10px 0;
  &:before {
    display: block;
    background-color: white;
    width: 10px;
    height: 70px;
    content: " ";
    position: absolute;
    top: 0;
    left: -10px;
  }
  svg {
    stroke: ${props => props.theme.backgroundBlue};
    fill: ${props => props.theme.backgroundBlue};
  }

  ${media.desktop`
    display: none;
  `};
`;

export const OptionGroup = styled.div`
  width: 100%;
`;

export const OptionGroupTitle = styled.div`
  width: 100%;
  font-size: 1.4rem;
  padding: 10px;
  background-color: ${props => lighten(0.5, props.theme.backgroundBlue)};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-top: ${props =>
    css`1px solid ${lighten(0.7, props.theme.backgroundGrey)}`};
`;

export const OptionGroupTitleControl = styled.p`
  width: 14px;
  height: 14px;
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const OptionItemsGroup = styled.ul`
  transform: scaleY(${props => (props.open ? 1 : 0)});
  height: ${props => (props.open ? "inherit" : "0px")};
  transform-origin: 0px 0px;
  overflow: hidden;
  transition: transform 200ms;
`;

export const OptionItem = styled.li`
  width: 100%;
  padding: 20px;
  border-left: 5px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${props => (props.selected ? "initial" : "pointer")};
  opacity: ${props => (props.open ? 1 : 0)};
  transition: all 200ms;
  background-color: ${props =>
    props.selected
      ? transparentize(0.8, props.theme.backgroundGreen)
      : "transparent"};
  &:hover {
    border-color: ${props =>
      props.selected ? "transparent" : props.theme.backgroundGreen};
    background-color: ${props =>
      props.selected
        ? transparentize(0.8, props.theme.backgroundGreen)
        : darken(0.5, props.theme.backgroundNoteBox)};
  }
`;

export const OptionItemTitle = styled.h3`
  font-size: 2rem;
  line-height: 2.4rem;
`;

export const FilterGroups = styled.div`
  width: 100%;
  padding: 20px;
  border-left: 5px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: ${props => (props.open ? 1 : 0)};
  transition: all 200ms;
  &:hover {
    svg {
      ${props =>
        !props.subGroupOpen &&
        css`
          stroke: ${props.theme.backgroundBlue};
          fill: ${props.theme.backgroundBlue};
        `};
    }
    background-color: ${props =>
      !props.subGroupOpen &&
      css`
        ${darken(0.5, props.theme.backgroundNoteBox)}
      `};
  }
`;

export const FilterGroupTitle = styled(OptionItemTitle)`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    transform: rotate(${props => (props.subGroupOpen ? "90deg" : "0")});
    transition: transform 200ms;
    margin-right: 10px;

    &:hover {
      stroke: ${props => props.theme.backgroundBlue};
      fill: ${props => props.theme.backgroundBlue};
    }
  }
`;

export const FilterSubGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: inherit;
  transform: scaleY(${props => (props.subGroupOpen ? 1 : 0)});
  transition: transform 200ms;
`;

export const FilterItem = styled.div`
  padding: 5px 10px;
  width: 100%;
  opacity: ${props => (props.subGroupOpen ? 1 : 0)};
  transition: opacity 200ms;
  &:first-of-type {
    padding-top: 10px;
  }
`;

export const FilterSubItem = styled(FilterItem)`
  padding: 10px 0 5px;
`;

export const FilterItemTitle = styled.div`
  font-size: 1.4rem;
`;
