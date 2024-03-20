import linq from 'linq';
import Question from './Question';

const Categorie = ({ data, toggleQuestions }) => {

  return (
    <div>
        <h1>Categories</h1>
        {
            linq.from(data).select(x => x.value).toArray().map(x => {
                return (
                    <div key={`Category ${x.id}`}>
                        <h5 key={`Category ${x.id}`} onClick={() => toggleQuestions(x.id)}>{x.category}</h5>
                        { x.questionsAreShown && <Question questionsOfCategory={x.questions}/> }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Categorie
