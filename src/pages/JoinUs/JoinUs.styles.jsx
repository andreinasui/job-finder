import { Form } from "react-router-dom";
import styled from "styled-components/macro";
import { CenterPageContainer } from "../../style-helpers";

export const JoinUsPageContainer = styled(CenterPageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;
export const InquiryContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
`;
export const QuestionContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
`;
export const QuestionContent = styled.p`
  font-size: 1.3rem;
  letter-spacing: 1px;
`;
export const AnswersContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
`;
export const AnswerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  flex: 1 1 0;
  height: 8rem;
  cursor: pointer;
  padding: 1rem;
  background-color: lightcoral;
  border-radius: 15px;
  transition: transform 250ms;
  &:hover {
    transform: scale(1.1);
  }
`;
export const AnswerTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-width: 35rem;
  gap: 2rem;
`;
export const AnswerTextArea = styled.textarea`
  font-size: 0.75rem;
  width: 100%;
  height: 10rem;
  outline: none;
  border: 2px solid transparent;
  background: #eee;
  border-radius: 10px;
  resize: none;
  padding: 0.5rem;
  &:focus {
    background-color: white;
    border-color: lightcoral;
    font-size: 0.85rem;
  }
`;
export const AnswerTextAreaSubmitButton = styled.button`
  background-color: white;
  border: 2px solid lightcoral;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  font-weight: 500px;
  font-size: 1.15rem;
  transition: transform 300ms;
  &:hover {
    transform: scale(1.05);
  }
  &:disabled {
    border-color: #eee;
  }
`;
export const SlidersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 2rem;
`;
export const SliderContent = styled.div`
  background-color: ${(props) => (props.active ? "lightcoral" : "#eee")};
  padding: 0.4rem ${(props) => (props.active ? "2rem" : "1rem")};
  border-radius: 1rem;
  transition: all 250ms ease;
`;