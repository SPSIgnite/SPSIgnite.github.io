import React from 'react';
import { Fade } from "react-awesome-reveal";
import logo from './Images/logo.png';
import './App.css';
import github from "./Images/github.png";

function App() {
  return (
    <div className="App">
        <Fade delay={1500} direction={"left"}>
            <a target="_blank" rel="noopener noreferrer" href={"https://github.com/SPSIgnite"}>
            <img src={github} className="Github-logo" alt="github" />
            </a>
        </Fade>
      <header className="App-header">
          <Fade cascade direction={"left"}>
            <img src={logo} className="App-logo" alt="logo" />
		        <h1>Ignite</h1>
                <h3>Spark Change</h3>
          </Fade>
      </header>
    </div>
  );
}

export default App;
