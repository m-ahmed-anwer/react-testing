import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialCount={0} />
        <p className="read-the-docs">
          Made in order to learn React Testing and AWS Amplify
        </p>
        <p className="read-the-docs">
          Created by{" "}
          <a href="https://github.com/m-ahmed-anwer" target="_blank">
            Ahmed Anwer
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
