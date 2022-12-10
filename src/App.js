import "./App.css";

import getContent from "../src/content.jsx";
import SantaReindeer from "./santa.jsx";

const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

function App() {
  const countdown = setInterval(function () {
    const christmas = 25;
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // get today's date (you only need the day)
    const d = new Date();

    const today = d.getDate();

    let remainingTime = christmas - today;
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownDisplay =
      remainingTime +
      " " +
      "days" +
      " " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s ";
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("christmasCountdown").innerHTML =
        "Merry Christmas";
    }
    document.getElementById("christmasCountdown").innerHTML = countdownDisplay;
  }, 1000);

  setInterval(function SantaReindeer() {
    window.location.reload();
  }, 30000);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <main className="main">
            {getContent()}
            {SantaReindeer()}
            <p id="santa"></p>
            <p id="christmasCountdown"></p>
            <p className="countdownText">'til Christmas!</p>
          </main>
        </div>
      </header>
    </div>
  );
}

export default App;
