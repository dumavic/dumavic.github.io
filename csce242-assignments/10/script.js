let adText = ["The variety within these images is outstanding.", "The photographers encaptured the atmosphere well.", "These images ephazises the calm, relaxing nature of the world.", "Traveling to these destinations is life changing.", "Lets make the world a better place together"];

const length = adText.length;
let i = 0; 
const currentText = document.getElementById("ad");

// use adText array and loop through for "ad" paragraph
let adTextSlide = () => {

    if(i >= length) {
        i = 0;
    }
    currentText.innerHTML = adText[i];  

    i = (i + 1) % length;
};

let imageArray = []
imageArray["./images/garden.jpg"] = `<p>
<a
  href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"
  >Image by wirestock</a
>
on Freepik
</p>`;
imageArray["./images/golden.jpg"] = `<p>
<a
  href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"
  >Image by wirestock</a
>
on Freepik
</p>`;
imageArray["./images/mountain-lake.jpg"] = `<p>
<a
  href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7"
  >Image by vecstock</a
>
on Freepik
</p>`;
imageArray["./images/small-house.jpg"] = `<p>
<a
  href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"
  >Image by wirestock</a
>
on Freepik
</p>`;
imageArray["./images/snow.jpg"] = `<p>
<a
  href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"
  >Image by wirestock</a
>
on Freepik
</p>`;


// create a function to loop through imageArray and display each as a src
let showImages = () => {
    const imageDiv = document.getElementById("image-div");
    for (let image in imageArray) {
        const img = document.createElement("img");
        img.src = image;
        imageDiv.append(img);

        const attribution = document.createElement("p");
        attribution.innerHTML = imageArray[image];
        imageDiv.append(attribution);
    }
}

setInterval(adTextSlide, 2000);
showImages();