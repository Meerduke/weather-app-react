import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <Weather city="London" />
        <Weather city="Milan" />
      </header>
    </div>
  );
}

export default App;
