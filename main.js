// bars effects
let bars = document.querySelector("header .bars");
let ul = document.querySelector(" header ul");
let lis = ul.querySelectorAll("li");

[...lis, bars].forEach((e) => {
  e.addEventListener("click", () => {
    bars.classList.toggle("click");
    ul.classList.toggle("click");
  });
});
// percent-skills effects
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

// tempery solution to the links

let links = document.querySelectorAll(".box .link");

links.forEach((link) => (link.onclick = () => link.querySelector(" a").click()));

// more-button

const moreBtn = document.querySelector(".projects button.more");
const moreContent = document.querySelector(".projects .more-content");
moreBtn.onclick = function () {
  moreContent.classList.toggle("show");
  moreBtn.textContent = moreBtn.textContent === "LESS" ? "MORE" : "LESS";
};
