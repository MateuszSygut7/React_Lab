import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Zmieniony tytuł aplikacji
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Poznaj reakt - DESIGN A i B
        </a>

        <nav>
          <a href="contact.html">Kontakt</a>
          <a href="buy.html">Kup</a>
          <a href="aboutus.html">o nas</a>
        </nav>
      </header>
    </div>
  );
}

export default App;
