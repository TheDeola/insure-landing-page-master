const menuIcon = document.querySelector(".mobile-menu-container");
const menuContainer = document.querySelector(".menu-container");
const viewButton = document.getElementById("view-button");

const hamburger = document.getElementById("hamburger");

const dialog = document.querySelector("dialog");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('show');
  dialog.showModal();
});

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;
  if (!isInDialog) {
    dialog.close();
  }
});