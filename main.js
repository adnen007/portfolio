let bars = document.querySelector("header .bars");
let ul = document.querySelector(" header ul");

bars.onclick = function () {
  this.classList.toggle("click");
  ul.classList.toggle("click");
};

function percentEffect() {
  let skill = document.querySelector(".skill .percent");
  let spans = document.querySelectorAll(".skill ul li .right span");

  if (skill.getBoundingClientRect().top < window.innerHeight * 0.6) {
    spans.forEach((e) => {
      e.style.width = e.getAttribute("data-percent");
    });
    document.removeEventListener("scroll", percentEffect);
  }
}
document.addEventListener("scroll", percentEffect);

let obj = { user: "Adnen" };

function print({ user }) {
  console.log(user);
}
print(obj);
