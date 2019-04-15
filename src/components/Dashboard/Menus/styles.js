import styled, { css } from "styled-components";

import {
  borderBlue,
  backgroundWhite,
  backgroundBlue,
  borderLight,
  textBlue,
  textDark,
  borderQuestion
} from "../../../constants/colors";

export const MenuContainer = styled.div`
  position: fixed;
  height: 100vh;
  ${props =>
    props.left
      ? css`
          left: ${props => (props.open ? 0 : "-319px")};
        `
      : css`
          right: ${props => (props.open ? 0 : "-319px")};
        `}
  width: 100%;
  max-width: 319px;
  ${props =>
    props.left
      ? css`
          border-right: 25px solid ${borderBlue};
        `
      : css`
          border-left: 25px solid ${borderBlue};
        `}

  z-index: 1000;
  transition: right 0.5s, left 0.5s;
  background-color: ${backgroundWhite};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  ${props =>
    props.left
      ? css`
          right: -21px;
        `
      : css`
          left: -21px;
        `}

  cursor: pointer;
  ${props =>
    props.left &&
    css`
      transform: rotate(180deg);
    `}
`;

// User details container

export const SubjectContainer = styled.div`
  padding: 30px 30px 30px 40px;
  display: flex;
  border-bottom: 2px solid ${borderQuestion};
  width: 100%;
`;

export const SubjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubjectImageHolder = styled.div`
  width: 86px;
  height: 86px;
  border: 1px solid ${borderLight};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SubjectImage = styled.div`
  width: 86px;
  height: 86px;
  ${props =>
    css`
      background: url(${props.image});
    `};
  background-position: center;
  background-size: cover;
  background-color: ${backgroundWhite};
  background-repeat: no-repeat;
`;

export const AddImageText = styled.p`
  color: ${textBlue};
  font-size: 1.2rem;
  margin-top: 5px;
`;

export const SubjectNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 15px;
`;

export const SubjectName = styled.h2`
  font-size: 2.5rem;
  color: ${textDark};
`;

export const SubjectTitle = styled.h3`
  font-size: 1.1rem;
  margin-top: 5px;
`;

// Menu items:

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  border-bottom: 1px solid ${borderQuestion};
  justify-content: flex-start;
`;

export const MenuChevron = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 15px;
`;

export const MenuItemTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${textDark};
`;

export const LogOutButton = styled.button`
  margin-top: 25px;
  width: 145px;
  height: 56px;
  outline: none;
  border: 1px solid ${borderLight};
  border-radius: 28px;
  font-size: 1.4rem;
  background-color: ${backgroundWhite};
  text-transform: uppercase;
  align-self: center;

  &:hover {
    color: white;
    background-color: ${backgroundBlue};
    border-color: ${borderBlue};
  }
`;
