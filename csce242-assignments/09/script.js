const showHide = () => {

    document.getElementById("exercise-one").classList.toggle('show-hide');
    document.getElementById("exercise-two").classList.toggle('show-hide');
    
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