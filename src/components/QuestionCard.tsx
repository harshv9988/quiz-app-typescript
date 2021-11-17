import React from "react";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question : {questionNr}/{totalQuestions}
    </p>
    {question}
    <div>
      {answer.map((answer) => (
        <div>
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            {answer}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
