const Question = ({ questions }) => {
  let counter = 1;
  function setKey() {
    counter++;
    return `Question ${counter}`;
  };

  return (
    <div>
      {questions.map((question) => {
        return <p key={setKey()}>{question}</p>
      })}
    </div>
  )
}

export default Question

