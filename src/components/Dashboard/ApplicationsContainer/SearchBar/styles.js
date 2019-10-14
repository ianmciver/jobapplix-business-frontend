import styled from "styled-components";

export const TransitionContainer = styled.div`
  height: ${props => (props.open ? `50px` : 0)};
  overflow: hidden;
  transition: height 300ms linear;
  position: fixed;
  top: 188px;
  width: 100%;
`;
export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.backgroundBlue};
  padding: 10px;
`;

export const SearchBar = styled.input`
  outline: none;
  border: 1px solid ${props => props.theme.borderLight};
  border-radius: 5px;
  width: 75%;
  height: 30px;
  padding: 0 10px;
  font-size: 1.6rem;
`;

export const SearchButton = styled.button`
  margin-left: 5px;
  width: 30px;
  height: 30px;
  font-size: 1.6rem;
  outline: none;
  border: 1px solid ${props => props.theme.borderLight};
  border-radius: 5px;
  font-weight: 700;
  background-color: ${props => props.theme.backgroundWhite};
`;
