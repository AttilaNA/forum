import './App.css';
import Navbar from './components/Navbar';
import Question from './components/Question';
import NavbarFixed from './components/NavbarFixed';
import data from './data.json';
import linq from 'linq';

function App() {
  const questions = linq.from(data).selectMany(x => x.value.questions).select(x => x.question).toArray();
  
  return (
    <>
      <Navbar />
      <NavbarFixed />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        <Question questions={questions}/>
        <div>Second</div>
      </div>
    </>
  );
}

export default App;
