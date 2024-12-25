let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let text = document.getElementById("text");

red.addEventListener("click", () => {
  text.style.color = "red";
});

green.addEventListener("click", () => {
  text.style.color = "green";
});

blue.addEventListener("click", () => {
  text.style.color = "blue";
});
