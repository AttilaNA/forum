import './App.css';
import Navbar from './components/Navbar';
import NavbarFixed from './components/NavbarFixed';
import Categorie from './components/Categorie';
import dataJson from './data.json';
import { useState } from 'react'

function App() {
  const [data] = useState(dataJson);

  return (
    <>
      <Navbar />
      <NavbarFixed />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        <Categorie data={data}/>
        <div>test</div>
      </div>
    </>
  );
}

export default App;
