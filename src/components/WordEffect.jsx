// export default function WordEffect() {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const words = ["Abhijeet A S", "SILICON HAWK"];
//   let wordIndex = 0;
//   let interval = null;
  
//   const startEffect = () => {
//     let iteration = 0;
//     clearInterval(interval);
    
//     interval = setInterval(() => {
//       const target = document.getElementById("my-name");
//       target.innerText =
//         target.innerText
//           .split("")
//           .map((letter, index) => {
//             if (index < iteration) {
//               return words[wordIndex][index];
//             }
//             return letters[Math.floor(Math.random() * 26)];
//           })
//           .join("");
      
//       if (iteration >= words[wordIndex].length) {
//         clearInterval(interval);
//         setTimeout(() => {
//           wordIndex = (wordIndex + 1) % words.length;
//           iteration = 0;
//           startEffect();
//         }, 3000);
//       } else {
//         iteration += 1 / 3;
//       }
//     }, 50);
//   };
  
//   document.getElementById("my-name").onmouseover = startEffect;
  
//   startEffect();
// }

// 2nd iteration of the code it words but only over the event of mouse over. 

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const words = ["ABHIJEET A S", "SILICON HAWK"];
// let wordIndex = 0;
// let interval = null;

// document.getElementById("my-name").onmouseover = event => {
//   let iteration = 0;
//   clearInterval(interval);
  
//   interval = setInterval(() => {
//     event.target.innerText =
//       event.target.innerText
//         .split("")
//         .map((letter, index) => {
//           if (index < iteration) {
//             return words[wordIndex][index];
//           }
//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");
    
//     if (iteration >= words[wordIndex].length) {
//       clearInterval(interval);
//       setTimeout(() => {
//         wordIndex = (wordIndex + 1) % words.length;
//         iteration = 0;
//       }, 200);
//     } else {
//       iteration += 1 / 5;
//     }
//   }, 20);
// };

// below is the original code

//   setTimeout(() => { 
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
//     let interval =   null;
    
//     document.getElementById("my-name").onmouseover = event => {  
//       let iteration = 0;
      
//       clearInterval(interval);
      
//       interval = setInterval(() => {
//         event.target.innerText = 
//         event.target.innerText.split("")
//         .map((letter, index) => {
//       if(index < iteration) {
//           return event.target.dataset.value[index];
//         }
        
//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");
      
//       if(iteration >= event.target.dataset.value.length){ 
//       clearInterval(interval);
//     }
    
//     iteration += 1 / 3;
//   }, 50);
//   }
// }, 20);

//3rd revision of the code
/*  const target = document.getElementById("my-name");
  
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
        iteration += 1 / 3;
      }
    }, 50);
  };
  
  target.onmouseover = startEffect;
  
  startEffect();
  
  setInterval(() => {
    startEffect();
  }, 5000); // Change this value to adjust the time between each refresh
} */

//final revision of the code.
/*function WordEffect(){
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
}*/