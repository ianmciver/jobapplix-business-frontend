import styled, { css } from "styled-components";

import {
  backgroundAppTable,
  textBlue,
  backgroundWhite
} from "../../../../../../constants/colors";

export const ChevronWrapper = styled.div`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
`;

export const MultiSelector = styled.div`
  height: 33px;
  overflow: ${props => (props.open ? "visible" : "hidden")};
  border: ${props => (props.open ? "none" : `1px solid ${backgroundAppTable}`)};
  border-radius: 5px;
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const MultiWindow = styled.div`
  padding-right: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  visibility: ${props => (props.open ? "hidden" : "visible")};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
`;

export const MultiList = styled.div`
  position: relative;
  border: ${props => (props.open ? `1px solid ${backgroundAppTable}` : "none")};
  border-radius: 5px;
  background-color: ${backgroundWhite};
  overflow: hidden;
  height: ${props => props.length * 33}px;
  top: ${props =>
    css`
      ${(props.valueIndex - 1) * -33}px
    `};
  left: -1px;
  z-index: ${props => (props.open ? 100 : 1)};
  display: inline-flex;
  flex-direction: column;
`;

export const MultiOption = styled.div`
  height: 33px;
  padding-left: 8px;
  padding-right: 55px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  &:hover {
    background-color: ${textBlue};
    color: ${backgroundWhite};
  }
  cursor: pointer;
`;
