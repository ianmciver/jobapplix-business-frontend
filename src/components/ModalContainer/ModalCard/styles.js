import styled from "styled-components";

export const ModalCardContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: white;
  transform: ${props =>
    props.state === "entered" ? `scale(1)` : `scale(0.8)`};
  opacity: ${props => (props.state === "entered" ? 1 : 0)};
  transition: all 300ms;
  border-radius: 3px;
`;

export const ModalCardHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.borderMedium69};
  font-size: 2rem;
  padding: 17.5px 21px;
`;

export const ModalCardBody = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ModalCardFooter = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.borderMedium69};
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
  padding: 17.5px 21px;
`;
