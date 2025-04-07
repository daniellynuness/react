import logo from '../logo.svg';
import '../App.css';
import Header from '../Header';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  function increment() {
    setContador(contador+1);
  }
  return (
      <div className="App">
      <header className="App-Header">
      <Header title = "Projeto React"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input type="button" value="Clique" onClick={increment} />
        </p>
        <p> {contador}</p> cliques!
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          </a>
      </header>
    </div>
  );
}

export default App;


