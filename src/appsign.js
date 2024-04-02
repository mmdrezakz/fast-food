const menuEl = document.querySelector("#menu");
const headerTitlesEl = document.querySelector(".header-titles");
const navLinks = document.querySelector(".nav-links");

const loginEl = document.querySelector(".login");

menuEl.addEventListener("click", function (e) {
  e.target.name = e.target.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("-top-[9%]");
});
function loginclick() {
  location.reload();
}
