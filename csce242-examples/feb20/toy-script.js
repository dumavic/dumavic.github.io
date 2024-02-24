let toys = ["drums", "blocks", "trucks", "balls", "bats"];
let toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 12.99;
toyPrices["slide"] = 19.99;
toyPrices["ken"] = 15.99;
toyPrices["bike"] = 19.99;

const showToys = () => {
    const resultDiv = document.getElementById("result");
    // clear the result div
    resultDiv.innerHTML = "";

    // for of loop
    // if you dont need the index, use i
    toys.forEach((toy) => {
        const p = document.createElement("p");
        p.innerHTML = toy;
        resultDiv.append(p);
    })

 };

 const addToy = () => {
    // use .value to get the value of the input field
    const toy = document.getElementById("txt-toy").value;
    toys.push(toy);
    showToys();
 }

 const showToysTable = () => {
    const toyTable = document.getElementById("toy-table");
    for (let toy in toyPrices) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = toy;
        tr.append(td);
        toyTable.append(tr);

        tr.onclick = () => {
            console.log('clicked', toyPrices[toy]);
            const descP = document.getElementById("description");
            descP.innerHTML = `The price of ${toy} is ${toyPrices[toy]}`;
            
        }
    }
  }
  

showToys();
document.getElementById("button-add-toy").onclick = addToy;
showToysTable();