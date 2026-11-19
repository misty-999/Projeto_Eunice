const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("home-nav");

menuButton.hidden = false;

menuButton.addEventListener("click", function () {
  const menuAberto = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(menuAberto));
});