
const imageChange = () => {
    let inputCommand = document.getElementById("txt-commands").value.slice(-1).toLowerCase();
    let changeImg = 'original';
    
    if (inputCommand == 'b') {
        changeImg = 'read';
    }
    else if (inputCommand == 'c') {
        changeImg = 'clown';
    }
    else if (inputCommand == 'p') {
        changeImg = 'birthday';
    }
    else if (inputCommand == 'r') {
        changeImg = 'rain';
    }
    else if (inputCommand == 's') {
        changeImg = 'shovel';
    }
    else if (inputCommand == 'w') {
        changeImg = 'work';
    }
    else {
        return;
    }

    document.getElementById("changeImg").src = `./images/${changeImg}.jpg`;

}

const slideImage = () => {
    const slider = document.getElementById("myRange");
    let changeImg = "yoga1";

    // oninput calls function when user uses the input form
    slider.oninput = function() {
        let rotationValue = this.value;

        if(rotationValue >= 0 && rotationValue <= 50) {
            changeImg = "yoga1";
        }
        else if(rotationValue >= 51 && rotationValue <= 100) {
            changeImg = "yoga2";
        }
        else if(rotationValue >= 101 && rotationValue <= 150) {
            changeImg = "yoga3";
        }
        else if(rotationValue >= 151 && rotationValue <= 200) {
            changeImg = "yoga4";
        }
        else if(rotationValue >= 201 && rotationValue <= 250) {
            changeImg = "yoga5";
        }
        else if(rotationValue >= 251 && rotationValue <= 300) {
            changeImg = "yoga6";
        }
        else if(rotationValue >= 301 && rotationValue <= 350) {
            changeImg = "yoga7";
        }
        else if(rotationValue >= 351 && rotationValue <= 400) {
            changeImg = "yoga8";
        }

        document.getElementById("slideImg").src = `./images/${changeImg}.jpg`;
    };

};

const showHide = () => {
    
document.getElementById("exercise-one").classList.toggle('show-hide');
document.getElementById("exercise-two").classList.toggle('show-hide');

}


document.getElementById("txt-commands").oninput = imageChange;
slideImage();

document.getElementById("exercise-one-toggle").onclick = showHide;
document.getElementById("exercise-two-toggle").onclick = showHide;

document.getElementById("exercise-one-toggle-mobile").onclick = showHide;
document.getElementById("exercise-two-toggle-mobile").onclick = showHide;
