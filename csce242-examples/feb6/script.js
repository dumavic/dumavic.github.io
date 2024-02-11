// toggle nav
const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");

}

// change paragraph by on click
// e is event
const changeP = (e) => {
    e.preventDefault();
    document.getElementById("display").textContent = "Hello Portia";

}

const showMood = () => {
    const color = document.getElementById("txt-mood").value.toLowerCase().trim();
    const moodP = document.getElementById("mood");

    let mood = "undeterminable";

    if (color == "red") {
        mood = "ANGRY";
    }

    else if (color == "blue") {
        mood = "sad";
    }

    else if (color == "yellow") {
        mood = "happy";
    }

    moodP.innerHTML = `You are in a ${mood} mood`;
}

const evalForm = (e) => {
    e.preventDefault();

    console.log("we did it")
}

document.getElementById("hamburger").onclick = showHideNav;

document.getElementById("link-click").onclick = changeP;

document.getElementById("txt-mood").onkeyup = showMood;

document.getElementById("form").onsubmit = evalForm;