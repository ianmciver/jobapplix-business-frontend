import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  top: 63px;
  right: 5px;
  background-color: ${props => props.theme.backgroundWhite};
  width: 250px;
  z-index: 1001;
  border-radius: 5px;
  display: ${props => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 1px 6px -2px ${props => props.theme.textDark};
  padding: 20px;
`;

export const Notch = styled.div`
  border-bottom: 20px solid ${props => props.theme.backgroundWhite};
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  position: absolute;
  top: -20px;
  right: 10px;
  z-index: 1000;
`;

export const SubjectNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubjectName = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.textDark};
`;

export const SubjectTitle = styled.h3`
  font-size: 1.1rem;
  margin-top: 5px;
`;

export const Separator = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderLight};
  margin: 10px 0;
  width: 100%;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 13px 0;
  &:hover {
    span {
      color: ${props => props.theme.textBlue};
    }
    svg {
      fill: ${props => props.theme.textBlue};
    }
  }
`;

export const MenuText = styled.span`
  font-size: 1.4rem;
  color: ${props => props.theme.textDark};
`;

export const MenuIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 10px;
`;
