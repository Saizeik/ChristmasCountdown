import "./App.css";
import renderCountdown from "../src/countDown.jsx";

function App() {
  setInterval(function renderCountdown() {
    window.location.reload();
  }, 10000);
  return (
    <div className="App">
      <header className="App-header">
        <main className="main">{renderCountdown()}</main>
      </header>
    </div>
  );
}

export default App;
