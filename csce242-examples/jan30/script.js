// constant name   what params  arraow syntax   scope of function
const doStuff = () => {

    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello Vic";
    messageP.classList.toggle("special");
};

const hideBox = () => {

    const box = document.getElementById("box").classList.add("hidden");

}


document.getElementById("btn-click").onclick = doStuff;

document.getElementById("box").onclick = hideBox;