import './App.css';
import Navbar from './components/Navbar';
import NavbarFixed from './components/NavbarFixed';
import Categorie from './components/Categorie';
import dataJson from './data.json';
import _ from 'lodash'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(dataJson);

  const toggleQuestions = (id) => {
    const deepCopyOfData = _.cloneDeep(data);
    switch (id) {
      case 1:
        deepCopyOfData.family.questionsAreShown= !deepCopyOfData.family.questionsAreShown;
        break;
      case 2:
        deepCopyOfData.freeTimeAndActivity.questionsAreShown= !deepCopyOfData.freeTimeAndActivity.questionsAreShown;
        break;
      case 3:
        deepCopyOfData.kindergarten.questionsAreShown= !deepCopyOfData.kindergarten.questionsAreShown;
        break;
      case 4:
        deepCopyOfData.school.questionsAreShown= !deepCopyOfData.school.questionsAreShown;
        break;
      default:
        break;
    }
    setData(deepCopyOfData);
  }

  return (
    <>
      <Navbar />
      <NavbarFixed />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        <Categorie data={data} toggleQuestions={toggleQuestions}/>
        <div>test</div>
      </div>
    </>
  );
}

export default App;
