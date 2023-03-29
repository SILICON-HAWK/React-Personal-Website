import React from 'react'
import "../css/HomePage.css"
// import WordEffect from './WordEffect.jsx'


export default function HomePage() {

  
  return (
    <div className='mainDiv'>
      {WordEffect()}
      <div className="wordWrapper">
      <div className="myName" id='my-name' data-value=''>
        SILICON HAWK
      </div>
      <div className="magic">
        PORTFOLIO
      </div>
      </div>
    </div>
  )
}

function WordEffect(){
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const words = ["ABHIJEET A S", "SILICON HAWK"];
let wordIndex = 0;
let interval = null;

const target = document.getElementById("my-name");
  
  const startEffect = () => {
    let iteration = 0;
    clearInterval(interval);
    
    interval = setInterval(() => {
      target.innerText =
        words[wordIndex]
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return letter;
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      
      if (iteration >= words[wordIndex].length) {
        clearInterval(interval);
        wordIndex = (wordIndex + 1) % words.length;
        iteration = 0;
      } else {
        iteration += 1 / 2;
      }
    }, 50);
  };
  
  target.onmouseover = startEffect;
  
  startEffect();
  
  setInterval(() => {
    startEffect();
  }, 5000); // Change this value to adjust the time between each refresh

    window.addEventListener("scroll", () => {
      // Check if target element is visible
      const rect = target.getBoundingClientRect();
      const isVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      // Stop effect if target element is not visible
      if (!isVisible) {
        clearInterval(interval);
      }
    });
}