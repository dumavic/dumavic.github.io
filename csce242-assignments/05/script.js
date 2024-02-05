const changeImg = () => {

    document.getElementById("changeImg").src = "./images/200black.gif";

};
const rotateImg = () => {
    const slider = document.getElementById("myRange");
    const image = document.getElementById("img-spin");

    // oninput calls function when user uses the input form
    slider.oninput = function() {
        const rotationValue = this.value;
        console.log("Rotation value:", rotationValue);
        // Apply rotation to the image
        image.style.transform = "rotate(" + rotationValue + "deg)";
    };
};

const addStar = () => {

    const playground = document.getElementById("star-playground");
    const star = document.createElement("div");
    star.classList.add("five-pointed-star");
    playground.append(star);
}


document.getElementById("changeImg").onclick = changeImg;
rotateImg();


document.getElementById("add-stars").onclick = addStar;