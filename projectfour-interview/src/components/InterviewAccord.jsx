import React, { useState } from "react";

const Cards = ({ question, arrow }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <button onClick={toggleVisibility}>{arrow}</button>
      {isVisible && <div>{question.answer}</div>}
    </div>
  );
};

export default Cards;
