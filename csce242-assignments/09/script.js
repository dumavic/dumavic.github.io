const showHide = (e) => {

    const exOne = document.getElementById("exercise-one");
    const exTwo = document.getElementById("exercise-two");
    
    // If exercise one's toggle is clicked
    if(e.target.id === "exercise-one-toggle" || e.target.id === "exercise-one-toggle-mobile") {
      
      // if exercise one is hidden then show it and hide exercise two
      if(exOne.classList.contains("show-hide")) {
        exOne.classList.remove("show-hide");
        exTwo.classList.add("show-hide");

        // if exercise one is hidden then add the class show-hide to exercise one and hide exercise two
        if(exTwo.classList.contains("show-hide" == false)) {
          exTwo.classList.add("show-hide");
        }
      }
      
    }

    // If exercise two's toggle is clicked
    else if(e.target.id === "exercise-two-toggle"|| e.target.id === "exercise-two-toggle-mobile") {

      // if exercise two is hidden then show it and hide exercise one
      if(exTwo.classList.contains("show-hide")) {
        exTwo.classList.remove("show-hide");
        exOne.classList.add("show-hide");

        // if exercise two is hidden then add the class show-hide to exercise two and hide exercise one
        if(exOne.classList.contains("show-hide" == false)) {
          exOne.classList.add("show-hide");
        }
    }
  }
};


const image = document.getElementById("myImage");
const button = document.getElementById("btn-count");

const startStopImage = (e) => {
    // get the button that is clicked
    if (e.target.innerHTML.toLowerCase() == "start") {
        e.target.innerHTML = "Stop";
        image.style.animationPlayState = "running";
    } else {
        e.target.innerHTML = "Start";
        image.style.animationPlayState = "paused";
    }

    const animationState = image.style.animationPlayState;
    image.style.animationPlayState = animationState;
}

// Get all the clickable images
const images = document.querySelectorAll('.yoga-img');

// Loop through each image and attach a click event listener
images.forEach(image => {
  image.addEventListener('click', function() {
    // Get the alt text of the clicked image
    const altText = this.alt;
    
    console.log('function click');
    // Display some text corresponding to the clicked image on the right side
    const textContainer = document.getElementById('yoga-text');
    textContainer.innerHTML = `<h2>${altText}</h2>`;
  });
});



document.getElementById("btn-count").onclick = startStopImage;
document.getElementById("exercise-one-toggle").onclick = showHide;
document.getElementById("exercise-two-toggle").onclick = showHide;

document.getElementById("exercise-one-toggle-mobile").onclick = showHide;
document.getElementById("exercise-two-toggle-mobile").onclick = showHide;