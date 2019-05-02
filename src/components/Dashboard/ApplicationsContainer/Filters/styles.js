import styled from "styled-components";

import {
  textLight,
  borderWhite,
  backgroundBlue
} from "../../../../constants/colors";

export const FiltersContainer = styled.div`
  position: fixed;
  top: 188px;
  background-color: ${backgroundBlue};
  width: 100%;
  padding: 10px 0 0;
  border-bottom: 2px solid ${borderWhite};
  z-index: 100;
`;

export const Instructions = styled.p`
  padding: 5px 30px 15px;
  font-size: 1.3rem;
  color: ${textLight};
`;

export const FilterTypeContainer = styled.div`
  width: 100%;
  padding: 10px 30px 10px;
  border-top: 2px solid ${borderWhite};
`;
export const FilterNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterTypeTitle = styled.p`
  font-size: 2rem;
  color: ${textLight};
`;

export const FilterTypeControl = styled.div`
  transform: ${props => (props.open ? `rotate(-90deg)` : `rotate(90deg)`)};
  transition: transform 500ms;
  cursor: pointer;
`;

export const FilterBodyContainer = styled.div`
  padding: 20px 0;
`;
