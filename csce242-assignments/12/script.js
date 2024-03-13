const getHousePlans = async () => {
    const url =
      "https://portiaportia.github.io/json/house-plans.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
    console.log(response);

  };
  
  const showHouses = async () => {
    let housePlans = await getHousePlans();
    let column = document.getElementById("columns");

    for (let i=0; i < housePlans.length; i++) {
        column.append(getHouse(housePlans[i]));
    };

  };
  
  const getHouse = (house) => {
    // general section for house
    const section = document.createElement("section");
    section.classList.add("column");
    
    // creating row One
    let rowOne =  document.createElement("section");
    rowOne.classList.add("row-one");

    // creating h2 name
    const h2Name = document.createElement("h2");
    h2Name.innerHTML = house.name;
    rowOne.append(h2Name);

    // creating div for rowOne
    let rowTwo = document.createElement("div");
    rowTwo.classList.add("row-two");
    rowTwo.append(rowOne);
    section.append(rowOne);

    // left side - MAIN IMAGE
    // creating div for image
    let divRowOneImg = document.createElement("div");
    divRowOneImg.classList.add("row-two-img");

    // main house image
    let mainImg = document.createElement("img");
    mainImg.src = `https://portiaportia.github.io/json/images/house-plans/`+ house.main_image;
    divRowOneImg.append(mainImg);
    rowTwo.append(divRowOneImg);

    // right Side - DESCRIPTION STUFF
    // creating div for description
    let divRowOneDesc = document.createElement("div");
    divRowOneDesc.classList.add("row-two-desc");

    // creating size
    const h3Size = document.createElement("h3");
    h3Size.classList.add("size");
    h3Size.innerHTML = 'Size: ' + house.size + ` square feet`;
    divRowOneDesc.append(h3Size);

    // creating bedroom
    const h3Bedroom = document.createElement("h3");
    h3Bedroom.classList.add("bedroom");
    h3Bedroom.innerHTML = 'Bedrooms: ' + house.bedrooms;
    divRowOneDesc.append(h3Bedroom);

    // creating bathrooms
    const h3Bathrooms = document.createElement("h3");
    h3Bathrooms.classList.add("bathroom");
    h3Bathrooms.innerHTML = 'Bathrooms: ' + house.bathrooms;
    divRowOneDesc.append(h3Bathrooms);

    // creating bathrooms
    const h4Features = document.createElement("h4");
    house.features.forEach(feature => {
        h4Features.innerHTML += ' *'+ feature;
        h4Features.classList.add("features");
    });
    divRowOneDesc.append(h4Features);

    rowTwo.append(divRowOneDesc);
    section.append(rowTwo);

    // end of row two

    // row three
    let rowThree = document.createElement("div");
    rowThree.classList.add("row-three");

    // creating floorplans
    let floorplans = document.createElement("div");
    let floorplansImg = document.createElement("img");
    let floorplanName = document.createElement("h3");


    
    // house.floor_plans.slice().forEach( async plan => {
    //     floorplansImg.classList.add("floorplans");

    //     floorplanName.innerHTML = await plan.name;
    //     floorplansImg.src = await `https://portiaportia.github.io/json/images/house-plans/`+ plan.image;
    //     floorplans.append(floorplanName);
    //     floorplans.append(floorplansImg);

    // });

    house.floor_plans.forEach(async plan => {

        floorplans.classList.add("floorplans");
        floorplanName.innerHTML += await plan.name;
        floorplansImg.src += await `https://portiaportia.github.io/json/images/house-plans/`+ plan.image;
        floorplans.append(floorplanName);
        floorplans.append(floorplansImg);
    });

    rowThree.append(floorplans);
    section.append(rowThree);

    return section;

  };
  
  showHouses();