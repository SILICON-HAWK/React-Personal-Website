import React from 'react'
import "../css/HomePage.css"
// import WordEffect from './WordEffect'

export default function HomePage() {
  setTimeout(() => { 
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let interval = null;
    
    document.getElementById("my-name").onmouseover = event => {  
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        event.target.innerText = 
        event.target.innerText.split("")
        .map((letter, index) => {
      if(index < iteration) {
          return event.target.dataset.value[index];
        }
        
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 50);
  }
}, 20);
  return (
    <div className='mainDiv'>
      <div className="wordWrapper">
      <div className="myName" id='my-name' data-value="SILICON HAWK">
        SILICON HAWK
        {/* <WordEffect /> */}
      </div>
      <div className="magic">
        PORTFOLIO
      </div>
      </div>
    </div>
  )
}