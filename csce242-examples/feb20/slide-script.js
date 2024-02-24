const slide = () => {
    // :not(.hidden) checks for the class hidden and not the element with that class
    const currentImg = document.querySelector("#slideshow :not(.hidden)");
    let nextImg = currentImg.nextElementSibling;


    // last image check
    if(nextImg === null) {
        nextImg = document.querySelector("#slideshow :first-child");
    }
    currentImg.classList.add("hidden");
    nextImg.classList.remove("hidden");
}

setInterval(slide, 1000);