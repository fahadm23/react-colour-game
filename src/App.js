import "./index.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([""]);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const getRandomColor = () => {
    const colors = [
      "red",
      "blue",
      "green",
      "pink",
      "orange",
      "black",
      "yellow",
      "purple",
    ];
    const generateColors = colors[Math.floor(Math.random() * colors.length)];
    return generateColors;
  };

  useEffect(() => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  }, []);

  function handleAnswerClicked(answer) {
    if (answer === color) {
      setWrongAnswer(false);
    } else {
      setWrongAnswer(true);
    }
  }

  return (
    <div className="App">
      <div>
        <div className="box" style={{ background: color }}></div>
        <div className="buttons">
          {answers.map((answer) => (
            <button onClick={() => handleAnswerClicked(answer)} key={answer}>
              {answer}
            </button>
          ))}
          {wrongAnswer ? (
            <div className="wrong">Wrong Answer</div>
          ) : (
            <div className="correct">Correct Answer</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
