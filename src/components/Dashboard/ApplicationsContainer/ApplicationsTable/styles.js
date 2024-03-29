import styled, { css } from "styled-components";

export const ApplicationsGroup = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${props => props.theme.borderMedium};
  width: 100%;
`;

export const ApplicationsGroupHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.borderQuestion};
`;

export const ApplicationsRowContent = styled(ApplicationsGroupHead)`
  background-color: ${props => props.bgcolor && props.bgcolor};
`;

export const ExpandAppIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: ${props => props.theme.textMedium};
  transition: transform 300ms;
  cursor: pointer;
  flex-shrink: 0;

  ${props =>
    props.selected &&
    css`
      fill: ${props.theme.textBlue};
      transform: rotate(45deg);
    `}
`;
// name: 169 40.8%, group 145.7 35.2%, details 99.36 (24%)
