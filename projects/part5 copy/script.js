// toggle nav
const showHideNav = () => {
    document.getElementById("nav-toggle").classList.toggle('show-hide');
    console.log("hamburger btn");
}
document.getElementById("hamburger").onclick = showHideNav;


const getItemsJSON = async () => {
    const url =
      "../json/items.json";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
    console.log(response);

  };

  
const getItemsHomeJSON = async () => {
  const url =
    "./json/items.json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  console.log(response);

};

  const showHomeItems = async () => {
    let itemList = await getItemsHomeJSON();
    let carousel = document.getElementById("carousel");

    for (let i=0; i < itemList.length; i++) {

        if (itemList[i].newest_arrival) {
            carousel.append(getHomeItems(itemList[i]));
        }

  }
}

const showCollectionItems = async () => {
  let itemList = await getItemsJSON();
  let shopTopRow = document.getElementById("shop-top-row");

  for (let i=0; i < itemList.length; i++) {

    if (itemList[i].collectionType == "black") {
      shopTopRow.append(getTopItems(itemList[i])); 
    }

};
}
    
  const showShopItems = async () => {
    let itemList = await getItemsJSON();
    let shopItemsTop = document.getElementById("shop-items-top");
    let shopItemsBot = document.getElementById("shop-items-bot");

    for (let i=0; i < itemList.length; i++) {

        if (itemList[i].best_seller) {
            shopItemsTop.append(getTopItems(itemList[i])); 
        }
        else if (itemList[i].newest_arrival) {
            shopItemsBot.append(getBotItems(itemList[i]));
        }
    };

  };

  const showItem = async () => {

    let itemList = await getItemsJSON();
    let itemPageContainer = document.getElementsByClassName("item-page-container");
    let itemOne = document.getElementById("item-1");
    let itemTwo = document.getElementById("item-2");
    let itemThree = document.getElementById("item-3");
    let itemFour = document.getElementById("item-4");
    let itemFive = document.getElementById("item-5");
    let itemSix = document.getElementById("item-6");
    let itemSeven = document.getElementById("item-7");
    let itemEight = document.getElementById("item-8");
    let itemNine = document.getElementById("item-9");

    for (let i=0; i < itemPageContainer.length; i++) {
      // console.log(itemPageContainer[i]);
      if(itemList[i].id = itemOne) {
        itemOne.append(getItems(itemList[i]));
      }
      else if (itemList[i].id = itemTwo) {
        itemTwo.append(getItems(itemList[i+1]));
      }
      else if (itemList[i].id = itemThree) {
        itemThree.append(getItems(itemList[i+2]));
      }
      else if (itemList[i].id = itemFour) {
        itemFour.append(getItems(itemList[i+3]));
      }
      else if (itemList[i].id = itemFive) {
        itemFive.append(getItems(itemList[i+4]));
      }
      else if (itemList[i].id = itemSix) {
        itemSix.append(getItems(itemList[i+5]));
      }
      else if (itemList[i].id = itemSeven) {
        itemSeven.append(getItems(itemList[i+6]));
      }
      else if (itemList[i].id = itemEight) {
        itemEight.append(getItems(itemList[i+7]));
      }
      else if (itemList[i].id = itemNine) {
        itemNine.append(getItems(itemList[i+8]));
      }

    }

   }

  
  const getTopItems = (item) => {

    // shop items
    let shopTopRow = document.createElement("section");
    shopTopRow.classList.add("shop-item");

    let anchorTag = document.createElement("a");
    anchorTag.href = "./"+item.item_page;
    anchorTag.append(shopTopRow)

    // item image
    let shopItemImg = document.createElement("div");
    shopItemImg.classList.add("shop-item-img");
    shopTopRow.append(shopItemImg);
    
    let itemImg = document.createElement("img");
    itemImg.src = `../images/`+ item.img_name;
    shopItemImg.append(itemImg);
    
    // item info
    let shopItemInfo = document.createElement("div");
    shopItemInfo.classList.add("shop-item-info");
    shopTopRow.append(shopItemInfo);

    // item name
    let itemName = document.createElement("h2");
    itemName.innerHTML = item.item_name;
    shopItemInfo.append(itemName);

    // item price
    let itemPrice = document.createElement("p");
    itemPrice.innerHTML = `Price: $` + item.price;
    shopItemInfo.append(itemPrice);

    return anchorTag; 

  }


  const getBotItems = (item) => {
    // shop items

    let shopBotRow = document.createElement("secion");
    shopBotRow.classList.add("shop-item");

    let anchorTag = document.createElement("a");
    anchorTag.href = "./"+item.item_page;
    anchorTag.append(shopBotRow)

    // item image
    let shopItemImg = document.createElement("div");
    shopItemImg.classList.add("shop-item-img");
    shopBotRow.append(shopItemImg);
    
    let itemImg = document.createElement("img");
    itemImg.src = `../images/`+ item.img_name;
    shopItemImg.append(itemImg);
    
    // item info
    let shopItemInfo = document.createElement("div");
    shopItemInfo.classList.add("shop-item-info");
    shopBotRow.append(shopItemInfo);

    // item name
    let itemName = document.createElement("h2");
    itemName.innerHTML = item.item_name;
    shopItemInfo.append(itemName);

    // item price
    let itemPrice = document.createElement("p");
    itemPrice.innerHTML = `Price: $` + item.price;
    shopItemInfo.append(itemPrice);

    return anchorTag; 
    
  }

  const getItems = (item) => {
    
    // item page - item showcase
    let itemShowcase = document.createElement("section");
    itemShowcase.classList.add("item-showcase");

    // shop items
    let shopItems = document.createElement("section");
    shopItems.classList.add("shop-items");
    itemShowcase.append(shopItems);

    // shop item
    let shopItem = document.createElement("div");
    shopItem.classList.add("shop-item");
    shopItems.append(shopItem);

    // item image
    let shopItemImg = document.createElement("div");
    shopItemImg.classList.add("shop-item-img");
    shopItem.append(shopItemImg);
    
    let itemImg = document.createElement("img");
    itemImg.src = `../images/`+ item.img_name;
    shopItemImg.append(itemImg);
    
    // item info
    let shopItemInfo = document.createElement("div");
    shopItemInfo.classList.add("shop-item-info");
    shopItem.append(shopItemInfo);

    // item name
    let itemName = document.createElement("h2");
    itemName.innerHTML = item.item_name;
    shopItemInfo.append(itemName);

    // item price
    let itemPrice = document.createElement("p");
    itemPrice.innerHTML = `Price: $` + item.price;
    shopItemInfo.append(itemPrice);

    // item size p
    let itemSizeP = document.createElement("p");
    itemSizeP.innerHTML = "Select Size:";
    shopItemInfo.append(itemSizeP);

    // item sizes
    let itemSizes = document.createElement("div");
    itemSizes.classList.add("size-option");
    shopItemInfo.append(itemSizes);

    // item size options
    for (let size of item.sizes) {
      let sizeBtn = document.createElement("button");
      sizeBtn.classList.add("sizes");
      sizeBtn.innerHTML = size;
      itemSizes.append(sizeBtn);
    }
    
    // add to cart button
    let addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("add-to-cart");
    addToCartBtn.innerHTML = "Add to Cart";
    addToCartBtn.addEventListener("click", () => {
    console.log("Added to cart!");
        });
    shopItemInfo.append(addToCartBtn);


    // item description
    let itemDesc = document.createElement("div");
    itemDesc.classList.add("item-description");

    let descHeader = document.createElement("h4");
    descHeader.innerHTML = "Description";
    itemDesc.append(descHeader);

    let descPara = document.createElement("p");
    descPara.innerHTML = item.description;
    itemDesc.append(descPara);

    itemShowcase.appendChild(shopItems);
    itemShowcase.appendChild(itemDesc)

    return itemShowcase; 

  }

  const getHomeItems = (item) => {

    let anchorTag = document.createElement("a");
    anchorTag.href = "./pages/" + item.item_page;
    
    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-img");
    anchorTag.append(carouselItem);

    let carouselP = document.createElement("p");
    carouselP.innerHTML = item.item_name;
    carouselItem.append(carouselP);

    let carouselImg = document.createElement("img");
    carouselImg.src = `./images/`+ item.img_name;
    carouselItem.append(carouselImg);

    return anchorTag;

  }

  showHomeItems();
  showShopItems();
  showItem();
  showCollectionItems();