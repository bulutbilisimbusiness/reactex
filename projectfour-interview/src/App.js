import { useState } from "react";
import data from "./helpers/data";
import Cards from "./components/InterviewAccord";
import { arrowdown } from "./helpers/icons";
function App() {
  const [questions, setQuestions] = useState(data);
  const [arrow, SetArrow] = useState(arrowdown);
  return (
    <>
      {questions.map((question) => (
        <Cards question={question} arrow={arrow} />
      ))}
    </>
  );
}

export default App;
