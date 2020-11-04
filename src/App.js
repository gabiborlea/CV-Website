import './App.css';
import React from "react";
import NavBar from './components/NavBar/NavBar'
import PersonalDetailsBlock from './components/PresentationPage/PersonalDetailsBlock'

function App() {
  return (
      <div className="App">
        <NavBar />
        <PersonalDetailsBlock />
      </div>
  );
}

export default App;
