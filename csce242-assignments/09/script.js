// const showHide = (e) => {

//     const exOne = document.getElementById("exercise-one");
//     const exTwo = document.getElementById("exercise-two");
    
//     // If exercise one's toggle is clicked
//     if(e.target.id === "exercise-one-toggle" || e.target.id === "exercise-one-toggle-mobile") {
      
//       // if exercise one is hidden then show it and hide exercise two
//       if(exOne.classList.contains("show-hide")) {
//         exOne.classList.remove("show-hide");
//         exTwo.classList.add("show-hide");

//         // if exercise one is hidden then add the class show-hide to exercise one and hide exercise two
//         if(exTwo.classList.contains("show-hide" == false)) {
//           exTwo.classList.add("show-hide");
//         }
//       }
      
//     }

//     // If exercise two's toggle is clicked
//     else if(e.target.id === "exercise-two-toggle"|| e.target.id === "exercise-two-toggle-mobile") {

//       // if exercise two is hidden then show it and hide exercise one
//       if(exTwo.classList.contains("show-hide")) {
//         exTwo.classList.remove("show-hide");
//         exOne.classList.add("show-hide");

//         // if exercise two is hidden then add the class show-hide to exercise two and hide exercise one
//         if(exOne.classList.contains("show-hide" == false)) {
//           exOne.classList.add("show-hide");
//         }
//     }
//   }
// };


// const image = document.getElementById("myImage");
// const button = document.getElementById("btn-count");

// const startStopImage = (e) => {
//     // get the button that is clicked
//     if (e.target.innerHTML.toLowerCase() == "start") {
//         e.target.innerHTML = "Stop";
//         image.style.animationPlayState = "running";
//     } else {
//         e.target.innerHTML = "Start";
//         image.style.animationPlayState = "paused";
//     }

//     const animationState = image.style.animationPlayState;
//     image.style.animationPlayState = animationState;
// }

// // Get all the clickable images
// const images = document.querySelectorAll('.yoga-img');

// // Loop through each image and attach a click event listener
// images.forEach(image => {
//   image.addEventListener('click', function() {
//     // Get the alt text of the clicked image
//     const altText = this.alt;
    
//     console.log('function click');
//     // Display some text corresponding to the clicked image on the right side
//     const textContainer = document.getElementById('yoga-text');
//     textContainer.innerHTML = `<h2>${altText}</h2>`;
//   });
// });


// document.querySelector('#btn-draw').onclick = (event) => {
//   const ladderContainer = document.getElementById('ladder');
//   ladderContainer.innerHTML = '';


//   for (let i = 0; i < 10; i++) {
//     let rung = document.createElement('div');
//     rung.className = 'rung';
//     rung.style.bottom = `${i * 20} px`;
//     ladderContainer.appendChild(rung);
//     console.log('rung', i);
//   }

//   let stickFigure = document.getElementById('stickFigure');
//   stickFigure.style.display = 'flex';

//   ladderContainer.style.display = "flex";

//   document.getElementById('btn-climb').style.display = 'flex';
// }

function drawLadder() {
  const ladderContainer = document.getElementById('ladder');
  ladderContainer.innerHTML = ''; // Clear previous ladder
  
  for (let i = 0; i < 10; i++) {
      let rung = document.createElement('div');
      rung.className = 'rung';
      rung.style.bottom = `${i * 20}px`;
      ladderContainer.append(rung);
  }
  
  let stickFigure = document.getElementById('stickFigure');
  stickFigure.style.display = 'flex';
  stickFigure.style.marginTop = '-20px';
  
  document.getElementById('btn-climb').style.display = 'flex';
  document.getElementById('ladder').style.display = 'flex';
}

function climbLadder() {
  let stickFigure = document.getElementById('stickFigure');
  let step = 0;
  let interval = setInterval(() => {
      if (step >= 10) {
          clearInterval(interval);
          return;
      }
      stickFigure.style.bottom = `${step * 20}px`;
      stickFigure.src = step % 2 === 0 ? './images/left.png' : './images/right.png';
      step++;
  }, 500);
}

document.getElementById('btn-draw').onclick = drawLadder;
document.getElementById('btn-climb').onclick = climbLadder;