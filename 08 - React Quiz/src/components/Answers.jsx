import React from "react";
import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelectAnswer }) => {
  const shuffledAnswers = useRef();

  if (shuffledAnswers.current === undefined) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // shuffle
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const answerIsSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerState === "answered" && answerIsSelected) {
          cssClasses += "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          answerIsSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClasses}
              disabled={selectedAnswer}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
