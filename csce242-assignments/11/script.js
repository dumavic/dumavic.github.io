
class Pizza {

    // constructor
    constructor(title, ingredients, sauce, cheese, price, image) {
        
        this.title = title;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.image = image;
    }
    
get item() {

    // first section
    const section = document.createElement("section");
    section.classList.add("pizza");
    section.setAttribute("id", "pizza-column")

    const h2 = document.createElement("h2");
    h2.innerHTML = this.title;
    section.append(h2);

    const imageView = document.createElement("section");
    imageView.classList.add("image-section");
    const imgView = document.createElement("img");
    imgView.src = "./images/" + this.image;
    console.log("img", imgView.src)
    imageView.append(imgView);
    section.append(imageView);

    


    // second sections
    const moreSection = document.createElement("section");
    moreSection.classList.add("hidden", "more");

    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    moreSection.append(h3);

    const ingredients = this.paragraph("Ingredients", this.ingredients);
    moreSection.append(ingredients);

    const sauce = this.paragraph("Sauce", this.sauce);
    moreSection.append(sauce);

    const cheese = this.paragraph("Cheese", this.cheese);
    moreSection.append(cheese);

    const price = this.paragraph("Price", this.price);
    moreSection.append(price);

    const imageSection = document.createElement("section");
    imageSection.classList.add("image-section");
    const img = document.createElement("img");
    img.src = "./images/" + this.image;
    imageSection.append(img);
    moreSection.append(imageSection);

    section.append(moreSection);

        // Close button
        const closeButton = document.createElement("span");
        closeButton.innerHTML = "&#10006;"; // 'X' symbol
        closeButton.setAttribute("id", "close-popup");
        closeButton.classList.add("close-btn");
    
        closeButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering the section click event
            moreSection.classList.add("hidden"); // Hide the popup
        });
    
        moreSection.append(closeButton);

    section.addEventListener("click", this.expandContract);

    return section;
}

expandContract(e) {
    const section = e.currentTarget.closest("section.pizza").querySelector(".more");
    section.classList.toggle("hidden");
};

paragraph(title, info) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${title}:</strong> ${info}`;
    return p;
};

}


const pizzas = [];

pizzas.push(new Pizza("Margherita", "Tomatoes, cheese, garlic, oregano", "Extra virgin olive oil, red tomato sauce", "Mozzarella" ,"$15.99", "margherita.jpg"));
pizzas.push(new Pizza("Chicago", "Tomatoes, cheese, meat, mushrooms, onions, peppers", "Red tomato sauce", "Mozzarella, parmesan" ,"$20.99", "chicago.jpg"));
pizzas.push(new Pizza("New York", "Tomatoes, cheese, meat", "Red tomato sauce ", "Mozzarella" ,"$13.99", "newyork.jpg"));
pizzas.push(new Pizza("Sicilian", "Tomatoes, cheese, onion, anchovies, herbs", "Red tomato sauce, olive oil blend", "Mozzarella or none" ,"$18.99", "sicilian.jpg"));
pizzas.push(new Pizza("Greek", "Tomatoes, cheese mix, black olives, red onions, other veggies", "Tomato paste sauce", "Mozzarella, cheddar, provolone, feta" ,"$17.99", "greek.jpg"));
pizzas.forEach((pizza) => {
    document.getElementById("pizza-list").append(pizza.item);
});

