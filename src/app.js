const menuEl = document.querySelector("#menu");
const headerTitlesEl = document.querySelector(".header-titles");
const navLinks = document.querySelector(".nav-links");

menuEl.addEventListener("click", function (e) {
  e.target.name = e.target.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-0");
  navLinks.classList.add("my-24");
});
