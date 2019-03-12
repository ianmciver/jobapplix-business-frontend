import styled from "styled-components";

import {
  borderDark,
  textDark,
  textLight,
  textBlue,
  backgroundBlue
} from "../../../../constants/colors";

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const OptionButtonContainer = styled.div`
  display: flex;
  align-items: center;

  .selected {
    color: ${textLight};
    background-color: ${backgroundBlue};
  }
`;

export const OptionButton = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  border: 2px solid ${borderDark};
  color: ${textDark};
  width: 37vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 500ms;
  &:hover {
    color: ${textLight};
    background-color: ${backgroundBlue};
  }
`;

export const OptionDividerHor = styled.div`
  flex-grow: 1;
  border: 1px solid ${borderDark};
`;

export const OptionDividerVer = styled.div`
  height: 15px;
  border: 1px solid ${borderDark};
`;

export const OptionText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 4vw;
  width: 25vw;
  text-align: left;
`;

export const QuestionsText = styled.p`
  color: ${textBlue};
  font-size: 1.1rem;
  align-self: flex-start;
  margin: 0 0 20px;
  cursor: pointer;
`;
