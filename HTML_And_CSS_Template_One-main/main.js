let links = document.querySelector(".header .links");

links.addEventListener("click", () => {
  links.classList.toggle("clicked");
});

let root = document.querySelector(":root");
let serImage = document.querySelector(".services .col:last-child .image img");
let switch1 = document.querySelector(".landing .switch div:first-child");
let switch2 = document.querySelector(".landing .switch div:last-child");
root.classList.add("orange");
switch1.onclick = function () {
  root.classList.add("orange");
  serImage.src = "images/services.jpg";
};
switch2.onclick = function () {
  root.classList.remove("orange");
  serImage.src = "images/services0.jpg";
};
