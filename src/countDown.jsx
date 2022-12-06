import React from "react";

import jingleBells from "./jingle-bell.svg";
import santa from "./sleigh.svg";
import reindeer from "./reindeer.svg";


export default function renderCountdown() {
  const christmas = 25;
  const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // get today's date (you only need the day)
  const d = new Date();

  const today = d.getDate();

  let remainingTime = christmas - today;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownDisplay =
    remainingTime + " " +
    "days" +
    " " +
    hours +
    "h " +
    minutes + 
    "m " +
    seconds +
    "s ";
  if (remainingTime + hours + minutes + seconds < 0) {
    clearInterval();
    document.getElementById("demo").innerHTML = "Merry Christmas";
  }

  return (
    <>
      
      <div className="container">
      <div className=" animate__animated animate__shakeX  jingleBells-container">
      <img className ="jingleBells-image" src={jingleBells} alt="jingle Bells" />
      <img className ="jingleBells-image" src={jingleBells} alt="jingle Bells" />

      </div>
      
      
      <div className=" animate__animated animate__fadeOutRightBig reindeer-container">
     
      <img className ="jingleBells-image" src={santa} alt="santa's sleigh" />
      <img className ="reindeer-image" src={reindeer} alt="reindeer" />
      <img className ="reindeer-image" src={reindeer} alt="reindeer" />
      <img className ="reindeer-image" src={reindeer} alt="reindeer" />
      </div>
      <div className="  animate__animated animate__wobble">
      <h1> Christmas Countdown 🎄</h1>
      </div>
        <div className="countdownDisplay">
          {countdownDisplay}-
        </div>
        <div className="animate__animated animate__flash">
        <p className="countdownText">Days 'til Christmas!</p>
        </div>
      </div>
    </>
  );
  
}


