import logo from './logo.svg';
import './global.scss';
import Hero from './Components/Hero/hero'

function App() {
  return (
    <div className="App">
      <Hero />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
