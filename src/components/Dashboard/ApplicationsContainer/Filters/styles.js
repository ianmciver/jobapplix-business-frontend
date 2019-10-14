import styled from "styled-components";

import { media } from "../../../../styles/mediaQueries";

export const FiltersModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  ${media.desktop`
    padding-left: 319px;
  `}
`;
export const FiltersContainer = styled.div`
  position: fixed;
  top: 188px;
  background-color: ${props => props.theme.backgroundBlue};
  width: 100%;
  padding: 10px 0 0;
  border-bottom: 2px solid ${props => props.theme.borderWhite};
  z-index: 100;
  ${media.desktop`
    top:  82px
    max-width: 600px;
  `}
`;

export const Instructions = styled.p`
  padding: 5px 30px 15px;
  font-size: 1.3rem;
  color: ${props => props.theme.textLight};
`;

export const FilterTypeContainer = styled.div`
  width: 100%;
  padding: 10px 30px 10px;
  border-top: 2px solid ${props => props.theme.borderWhite};
`;
export const FilterNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterTypeTitle = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.textLight};
`;

export const FilterTypeControl = styled.div`
  transform: ${props => (props.open ? `rotate(-90deg)` : `rotate(90deg)`)};
  transition: transform 500ms;
  cursor: pointer;
`;

export const FilterBodyContainer = styled.div`
  padding: 20px 0;
`;
