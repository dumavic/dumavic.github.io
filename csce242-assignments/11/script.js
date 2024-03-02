
class Tree {

    // constructor
    constructor(title, growth, height, lifespan, habitat, description, image) {
        
        this.title = title;
        this.growth = growth;
        this.height = height;
        this.lifespan = lifespan;
        this.habitat = habitat;
        this.description = description;
        this.image = image;

    }
    
get item() {

    // first section
    const section = document.createElement("section");
    section.classList.add("tree");
    section.setAttribute("id", "tree-column")

    const h2 = document.createElement("h2");
    h2.innerHTML = this.title;
    section.append(h2);

    const imageView = document.createElement("section");
    imageView.classList.add("image-section");
    const imgView = document.createElement("img");
    imgView.src = "./images/" + this.image;
    imageView.append(imgView);
    section.append(imageView);


    // second sections
    const moreSection = document.createElement("section");
    moreSection.classList.add("hidden", "more");

    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    moreSection.append(h3);

    const growth = this.paragraph("Growth Rate", this.growth);
    moreSection.append(growth);

    const height = this.paragraph("Height", this.height);
    moreSection.append(height);

    const lifespan = this.paragraph("Lifespan", this.lifespan);
    moreSection.append(lifespan);

    const habitat = this.paragraph("Habitat", this.habitat);
    moreSection.append(habitat);

    const description = this.paragraph("Description", this.description);
    moreSection.append(description);

    const imageSection = document.createElement("section");
    imageSection.classList.add("image-section");
    const img = document.createElement("img");
    img.src = "./images/" + this.image;
    imageSection.append(img);
    moreSection.append(imageSection);

    section.append(moreSection);

    section.addEventListener("click", this.expandContract);

    return section;
}

expandContract(e) {
    const section = e.currentTarget.closest("section.tree").querySelector(".more");

    section.classList.toggle("hidden");
};

paragraph(title, info) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${title}:</strong> ${info}`;
    return p;
};

}


const trees = [];

trees.push(new Tree("Bald Cypress", "Medium Growth", "60 ft", "70 years", "Wet, swampy soils of floodplains lakes","Taxodium distichum is a deciduous conifer in the family Cupressaceae. It is native to the southeastern United States. Hardy and tough, this tree adapts to a wide range of soil types, whether wet, salty, dry, or swampy. It is noted for the russet-red fall color of its lacy needles", "bald-cypress.jpg"));
trees.push(new Tree("Eastern Redbud", "Fast Growth", "20 ft", "60 years", "Forest understory","Eastern redbud is a small deciduous tree. Trees typically grow 20 feet in height with a similar spread and have gracefully ascending branches and a rounded shape. Eastern redbud leaves are alternate, simple, broadly heart-shaped and 3 to 5 inches high and wide. Leaves emerge reddish, turning green as they expand.", "eastern-redbud.jpeg"));

trees.push(new Tree("Loblolly Pine", "Fast Growth", "6 ft", "30 years", "Soils with poor surface drainage, firm subsoil","The loblolly pine is an important American timber tree that is also cloaked in beauty during much of the year. With a natural range reaching across the southeastern United States, this pine is distinguished by its large, columnar trunk; attractive bark in broad, reddish-brown plates; and pale green needles. As one of the fastest-growing southern pines, it is used for a quick screen in many landscapes.", "loblolly-pine.jpeg"));

trees.push(new Tree("Southern Magnolia", "Fast Growth", "70 ft", "30 years", "Soils with poor surface drainage, firm subsoil","One of the most beautiful native trees, evergreen with straight trunk, conical crown, and very fragrant, very large, white flowers. They are cup-shaped, about 8 inches across, with 6 thick petals, wider at the tip, where they are cupped. The blossoms open about 9:00 A.M. and close at night for 2 or 3 days; then all the stamens are shed and the flower reopens, turns brown, and disintegrates. The flowers appear throughout the summer and into fall. The flowers produce conelike seedpods that contain large red seeds. When the pods open, the seeds often fall from their place and hang by silky threads.", "southern-magnolia.jpg"));


trees.forEach((tree) => {
    document.getElementById("tree-list").append(tree.item);
});

