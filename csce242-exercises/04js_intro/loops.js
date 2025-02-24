document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = "";
    const errorDisplay = document.getElementById("error-num-order");
    errorDisplay.innerHTML = "";    //clear out any previous errors
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML = "";

    if(endNum < startNum) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`
        return; //don't do anything else if you already have an error
    }

    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);
        //attach event to onclick li
        li.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}.`
        }
    }

}


let count  = 0;
let updateCount;
document.getElementById("btn-count").onclick = (event) => {

    console.log("count button")
    const countArea = document.getElementById("count-display");

    if(event.currentTarget.innerHTML.toLowerCase() == "start") {
        event.currentTarget.innerHTML = "Stop";

        updateCount = setInterval(() => {
            count++;
            document.querySelector("#count-display").innerHTML = count;
        }, 300);
    }
    else {
        event.currentTarget.innerHTML = "Start";
        clearInterval(updateCount);
    }


}

document.getElementById("btn-reset").onclick = () => {
    count = 0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML = "Start";
    document.querySelector("#count-display").innerHTML = "";
}


document.getElementById("btn-pokemons").onclick = (event) => {
    const pokemons = ["charizard", "blastoise", "venusaur"];

    event.currentTarget.disabled = true;


    const ul = document.createElement("ul");
    document.getElementById("display-pokemons").append(ul);

    pokemons.forEach((pokemon, i) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = `${i+1}, ${pokemon}`;
    })
};

document.getElementById("btn-show-pokemon-desc").onclick = () => {
    const pokemons = [];
    pokemons["charizard"] = "fire type";
    pokemons["blastoise"] = "water type";
    pokemons["venusaur"] = "grass type";

    const section = document.getElementById("display-pokemon-desc");

    for(let pokemon in pokemons) {
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `${pokemon}: ${pokemons[pokemon]}`;
        p.onclick = () => {
            document.getElementById("pokemon-message").innerHTML = `Best ${pokemon} ever`;
        }
    }
}
