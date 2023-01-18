import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InquiryFinalisedContext } from "../../contexts/Inquiry/InquiryFinalised";
import { appRoutes } from "../constants";
import {
  JoinUsPageContainer,
  InquiryContainer,
  QuestionContainer,
  QuestionContent,
  AnswersContainer,
  AnswerBox,
  AnswerTextArea,
  AnswerTextAreaSubmitButton,
  AnswerTextAreaContainer,
  SlidersContainer,
  SliderContent,
} from "./JoinUs.styles";

const questions = {
  0: {
    q_id: 1,
    question: "Câți ani ați mai lucrat în străinătate?",
    answers: [
      { ans_id: 11, text: "Nu am lucrat în străinătate" },
      { ans_id: 12, text: "Mai puțin de 2 ani" },
      { ans_id: 13, text: "Intre 2 și 5 ani" },
      { ans_id: 14, text: "Mai mult de 5 ani" },
    ],
  },
  1: {
    q_id: 2,
    question: "Unde ai mai lucrat inainte?",
    answers: [
      { ans_id: 21, text: "Cules legume" },
      { ans_id: 22, text: "Sortare depozit" },
      { ans_id: 23, text: "Abator" },
      { ans_id: 24, text: "Curier pachete" },
      { ans_id: 25, text: "Curățenie hotelieră" },
      { ans_id: 26, text: "Agricultură" },
      { ans_id: 27, text: "Construcții" },
      { ans_id: 28, text: "Meșter în construcții interioare" },
      { ans_id: 29, text: "Altceva" },
    ],
  },
  2: {
    q_id: 3,
    question:
      "Scrie-ne câteva cuvinte despre ce ai muncit sau ce muncești acum",
    answers: [],
  },
  3: {
    q_id: 4,
    question:
      "Care dintre urmatoarele limbi le vorbești la nivel conversațional?",
    answers: [
      { ans_id: 41, text: "Doar limba Română" },
      { ans_id: 42, text: "Engleză" },
      { ans_id: 43, text: "Olandeză" },
      { ans_id: 44, text: "Germană" },
    ],
  },
  4: {
    q_id: 5,
    question: "Când ați putea incepe să lucrați?",
    answers: [
      { ans_id: 51, text: "Imediat" },
      { ans_id: 52, text: "În următoarele 2 săptămâni" },
      { ans_id: 53, text: "În 2-4 săptămâni" },
      { ans_id: 54, text: "Peste 1 lună" },
    ],
  },
};

let savedEntries = [];

const JoinUs = () => {
  const textAreaRef = useRef(null);
  const currentQuestionIndex = useRef(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex.current]
  );
  const [textAreaSubmitButtonDisabled, setTextAreaSubmitButtonDisabled] =
    useState(true);
  const navigator = useNavigate();
  const { setFinalised: setInquiryFinalised } = useContext(
    InquiryFinalisedContext
  );

  const inquiryCompleted = () => {
    // TODO: save answers to db and navigate to last page
    setInquiryFinalised(true);
    navigator(appRoutes.WORKPLACES_ABS, { replace: true });
  };

  const handleChoseAnswer = (qaObject) => {
    currentQuestionIndex.current += 1;
    savedEntries.push(qaObject);

    setCurrentQuestion(questions[currentQuestionIndex.current]);
    if (currentQuestionIndex.current >= Object.keys(questions).length)
      inquiryCompleted();
  };

  const drawTextAreaAnswer = (question) => {
    return (
      <AnswerTextAreaContainer>
        <AnswerTextArea
          ref={textAreaRef}
          onChange={(event) => {
            event.target.value.length >= 10
              ? setTextAreaSubmitButtonDisabled(false)
              : setTextAreaSubmitButtonDisabled(true);
          }}
          placeholder="Scrie câteva cuvinte despre experiența ta de muncă..."
        ></AnswerTextArea>
        <AnswerTextAreaSubmitButton
          onClick={() => {
            handleChoseAnswer({
              question: question.q_id,
              answer: textAreaRef.current.value,
            });
          }}
          disabled={textAreaSubmitButtonDisabled}
        >
          Mai departe
        </AnswerTextAreaSubmitButton>
      </AnswerTextAreaContainer>
    );
  };

  const drawQuestionContainer = (question) => {
    if (!question) return;

    return (
      <>
        <QuestionContainer>
          <QuestionContent>{question.question}</QuestionContent>
        </QuestionContainer>
        {question.answers.length > 0 ? (
          <AnswersContainer>
            {question.answers.map((answer) => (
              <AnswerBox
                key={answer.ans_id}
                onClick={() =>
                  handleChoseAnswer({
                    question: question.q_id,
                    answer: answer.ans_id,
                  })
                }
              >
                {answer.text}
              </AnswerBox>
            ))}
          </AnswersContainer>
        ) : (
          drawTextAreaAnswer(question)
        )}
      </>
    );
  };

  const drawQuestionSliders = (question) => {
    if (!question) return;
    return (
      <SlidersContainer>
        {Object.keys(questions).map((elem, index) => (
          <SliderContent
            key={index}
            active={currentQuestionIndex.current === index}
          ></SliderContent>
        ))}
      </SlidersContainer>
    );
  };

  return (
    <JoinUsPageContainer as="main">
      {questions && (
        <InquiryContainer>
          {drawQuestionContainer(currentQuestion)}
          {drawQuestionSliders(currentQuestion)}
        </InquiryContainer>
      )}
    </JoinUsPageContainer>
  );
};

export default JoinUs;
