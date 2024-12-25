let image1 = document.getElementById("image1");
let sizeUp = document.getElementById("sizeUp");
let sizeDown = document.getElementById("sizeDown");
sizeUp.addEventListener("click", () => {
  let currentWidth = parseInt(image1.width);
  image1.style.width = currentWidth + 20 + "px";
});

sizeDown.addEventListener("click", () => {
  let currentWidth = parseInt(image1.width);
  if (currentWidth > 50) {
    image1.style.width = currentWidth - 20 + "px";
  }
});
