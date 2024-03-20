const Question = ({ questionsOfCategory }) => {
  return (
    <>
      {
        questionsOfCategory.map(x => <p key={`Question ${x.id}`}className={`Question ${x.id}`}>{x.question}</p>)
      }
    </>
  )
}

export default Question
