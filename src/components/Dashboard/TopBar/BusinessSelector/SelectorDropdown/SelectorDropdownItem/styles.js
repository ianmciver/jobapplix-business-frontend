import styled, { css } from "styled-components";

import { media } from "../../../../../../styles/mediaQueries";

export const ItemContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${props => props.theme.backgroundNoteBox};
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.backgroundNoteBox};
  }
`;

export const LogoContainer = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${props => props.theme.backgroundQuestion};
  border-radius: 7px;
  background-color: ${props =>
    props.createNew
      ? props.theme.backgroundGreen
      : props.theme.backgroundWhite};
  background-image: ${props => props.image && css`url(${props.image})`};
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textLight};
  font-size: 3rem;
`;

export const BusinessName = styled.h3`
  color: ${props => props.theme.textLight};
  font-size: 1.6rem;
  width: 175px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
