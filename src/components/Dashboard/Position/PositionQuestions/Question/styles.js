import styled, { css } from "styled-components";

export const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const QuestionCheckBox = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: ${props =>
    props.default
      ? "none"
      : props.checked
      ? css`2px solid ${props.theme.backgroundBlue}`
      : css`2px solid ${props => props.theme.borderMedium}`};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: ${props => (props.default ? "auto" : "pointer")};

  svg {
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
  }
`;

export const QuestionTextContainer = styled.div``;
export const QuestionText = styled.p`
  font-size: 1.4rem;
  line-height: 1.5rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 3px;
`;

export const SubQuestionText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;
