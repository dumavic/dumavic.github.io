
const imageChange = () => {
    let inputCommand = document.getElementById("txt-commands").value.toLowerCase();
    let changeImg = 'original';
    
    let image = document.getElementById("changeImg");

    console.log(inputCommand, 'input command')


    if (inputCommand === 'bike') {
        image.style.display = "flex";
        changeImg = 'bike';
    }
    else if (inputCommand === 'scooter') {
        image.style.display = "flex";
        changeImg = 'scooter';
    }
    else if (inputCommand === 'car') {
        image.style.display = "flex";
        changeImg = 'car';
    }
    else if (inputCommand === 'skateboard') {
        image.style.display = "flex";
        changeImg = 'skateboard';
    }
    else {
        image.style.display = "none";
        return;
    }

    document.getElementById("changeImg").src = `./images/${changeImg}.jpg`;

}


const colorPicker = document.getElementById('buttons');
const heart = document.getElementById("heart");

const changeColorHeart = (event) => {
    if (event.target.tagName === 'BUTTON') {
        heart.style.color = event.target.textContent.toLowerCase();
    }
};

colorPicker.addEventListener('click', changeColorHeart);

const showHide = () => {
    
document.getElementById("exercise-one").classList.toggle('show-hide');
document.getElementById("exercise-two").classList.toggle('show-hide');

}


document.getElementById("txt-commands").oninput = imageChange;

document.getElementById("exercise-one-toggle").onclick = showHide;
document.getElementById("exercise-two-toggle").onclick = showHide;

document.getElementById("exercise-one-toggle-mobile").onclick = showHide;
document.getElementById("exercise-two-toggle-mobile").onclick = showHide;
