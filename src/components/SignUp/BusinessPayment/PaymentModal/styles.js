import styled from "styled-components";

import {
  textLight,
  borderBlue,
  backgroundGreyOpacity94
} from "../../../../constants/colors";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${backgroundGreyOpacity94};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Modal = styled.div`
  width: 87.5%;
  max-width: 700px;
  border: 3px solid ${borderBlue};
  background-color: ${backgroundGreyOpacity94};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
`;

export const ModalLogo = styled.img`
  width: 11.2vw;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ModalSeparator = styled.div`
  width: 15vw;
  border: 2px solid ${borderBlue};
  margin: 20px 0 10px;
`;

export const PlanGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${textLight};
  h2 {
    font-size: 1.7rem;
    margin: 15px;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
