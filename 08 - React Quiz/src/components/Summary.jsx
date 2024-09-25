import React from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";

const Summary = ({ userAnswers }) => {
  let skippedAnswer = userAnswers.filter((answer) => answer === null);
  let answeredCorrectly = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  let answeredInCorrectly = 100 - answeredCorrectly;

  skippedAnswer = Math.round((skippedAnswer.length / userAnswers.length) * 100);
  answeredCorrectly = Math.round(
    (answeredCorrectly.length / userAnswers.length) * 100
  );
  answeredInCorrectly = 100 - answeredCorrectly - skippedAnswer;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswer}%</span>
          <span className="text">skipped Answers</span>
        </p>
        <p>
          <span className="number">{answeredCorrectly}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{answeredInCorrectly}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";
          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>
                {answer ? answer : "QUESTION SKIPPED"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
