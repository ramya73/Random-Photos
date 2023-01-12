const imageElement = document.querySelector(".image-container");
const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", () => {
  imageNum = 10;
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgElement = document.createElement("img");
    newImgElement.src = `https://picsum.photos/300/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageElement.appendChild(newImgElement);
  }
}
