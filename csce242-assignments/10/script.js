document.addEventListener("DOMContentLoaded", function () {
  let textContent = ["Happy Birthday", "Crazy Clown", "It's Raining", "Quiet Time", "Working Hard", "Work from Home"];
  let imageContent = ["./images/birthday.jpg", "./images/clown.jpg", "./images/rain.jpg", "./images/read.jpg", "./images/shovel.jpg", "./images/work.jpg"];
  const container = document.getElementById("column");
  
  textContent.forEach((text, index) => {
      let textElement = document.createElement("div");
      textElement.classList.add("title-item");
      textElement.textContent = text;
      textElement.addEventListener("click", function () {
          document.getElementById("popup-title").textContent = text;
          document.getElementById("popup-image").src = imageContent[index]; // Set appropriate image source
          document.getElementById("popup").style.display = "block";
      });
      container.appendChild(textElement);
  });

  document.getElementById("close-popup").addEventListener("click", function () {
      document.getElementById("popup").style.display = "none";
  });
});