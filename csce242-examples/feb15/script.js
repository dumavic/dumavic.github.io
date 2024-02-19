const numLoop = () => {
    // unorder list that shows under the "show number" button
    const numList = document.getElementById("num-list");
    // gives it indention space
    numList.innerHTML = "";
    // p tag above the unorderlist
    const errorP = document.getElementById("error-nums");
    // give it indention space
    errorP.innerHTML = "";

    //get starting and ending numbers
    let startNum = document.getElementById("txt-start-num").value;
    // ending number ends by -1
    let endNum = document.getElementById("txt-end-num").value;

    // console log
    console.log(`Looping from ${startNum} to ${endNum}.`);

    // check if the user enters a number and if it is not a number
    if (isNaN(startNum) || isNaN(endNum) || startNum.trim() == "" || endNum.trim() == "") {
        errorP.innerHTML = "You must enter number(s).";
        return;
    }

    // convert string to integer
    startNum = parseInt(startNum);
    endNum = parseInt(endNum);

    // check if the starting number is larger than the ending number
    if (startNum >= endNum) {
        errorP.innerHTML = "Ending number must be larger than starting number";
        return;
    }

    //create an li for each number
    //and append it to the list
    // loop from starting number to ending number
    for (let i = startNum; i < endNum; i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        numList.append(li);
    }
}

// counting
let updateCount;
let counter = 0;

// start and stop counting
const startStopCount = (e) => {
    // get the button that is clicked
    const countP = document.getElementById("count-p");

    // check if the button is start or top
    if (e.target.innerHTML.toLowerCase() == "start") {
        e.target.innerHTML = "Stop";

        // update the counter every second
        updateCount = setInterval(() => {
            counter++;
            countP.innerHTML = counter;
        }, 1000);

        // console log
    } else {
        e.target.innerHTML = "Start";
        clearInterval(updateCount);
    }

}

// show details
const showDetails = (e) => {
    console.log(e.target.getAttribute("rel"));
};

// event listeners
// clicking the button will run the function numLoop
document.getElementById("btn-loop-nums").onclick = numLoop;
// clicking the button will run the function startStopCount
document.getElementById("btn-count").onclick = startStopCount;
// clicking the li will run the function showDetails
document.querySelectorAll("#toys li").forEach((li) => {
    li.onclick = showDetails;
});