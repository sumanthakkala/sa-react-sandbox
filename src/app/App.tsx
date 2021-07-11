import axios from 'axios';
import React, {useEffect} from 'react';
import logo from '../assets/logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_TMDB_BASE_URL + '/configuration/languages')
      .then((response) => {
        console.log(response)
      })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sumanth Akkala React Sandbox</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
