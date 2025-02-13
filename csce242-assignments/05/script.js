const changeImg = () => {

    document.getElementById("changeImg").src = "./images/200black.gif";

};

// const rotateImg = () => {
//     const slider = document.getElementById("myRange");
//     const image = document.getElementById("img-spin");

//     // oninput calls function when user uses the input form
//     slider.oninput = function() {
//         const rotationValue = this.value;
//         console.log("Rotation value:", rotationValue);
//         // Apply rotation to the image
//         image.style.transform = "rotate(" + rotationValue + "deg)";
//     };
// };

const colorPicker = document.getElementById('color-picker');
const star = document.getElementById('star');

const changeColor = (event) => {
  const selectedColor = event.target.value;
  star.style.color = selectedColor;
};

colorPicker.addEventListener('input', changeColor);

const addHello = () => {

    // const playground = document.getElementById("hello-playground");
    const result = document.getElementById("hello-result");
    const newP = document.createElement('p');
    const paragraphContent = document.createTextNode('Hello');

    newP.appendChild(paragraphContent);

    result.appendChild(newP);
}


document.getElementById("changeImg").onclick = changeImg;
// rotateImg();


document.getElementById("hello-playground").onclick = addHello;