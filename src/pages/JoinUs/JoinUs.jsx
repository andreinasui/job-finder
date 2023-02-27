import { useContext, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { InquiryFinalisedContext } from "contexts/Inquiry/InquiryFinalised";
import { appRoutes } from "pages";
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
import { fetchQuestions as FetchQuestionsFromDB } from "db";

let savedEntries = [];

export const inquiryLoader = async () => {
  return FetchQuestionsFromDB();
};

const JoinUs = () => {
  const questions = useLoaderData();

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
    setInquiryFinalised(true);
    navigator(appRoutes.WORKPLACES_ABS, {
      replace: true,
      state: { inquiryEntries: savedEntries },
    });
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
              question: question.id,
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
                key={answer.id}
                onClick={() =>
                  handleChoseAnswer({
                    question: question.id,
                    answer: answer.id,
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
    <JoinUsPageContainer>
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
