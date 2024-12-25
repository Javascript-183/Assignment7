let text = document.getElementById("text");
let show = document.getElementById("show");
let hide = document.getElementById("hide");

show.addEventListener("click", () => {
  text.style.display = "block";
});
hide.addEventListener("click", () => {
  text.style.display = "none";
});
