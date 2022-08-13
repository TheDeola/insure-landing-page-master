const menuIcon = document.querySelector(".icon-menu");
const menuContainer = document.querySelector(".menu-container");
const viewButton = document.getElementById("view-button");

const dialog = document.querySelector("dialog");

menuIcon.addEventListener("click", () => {
  dialog.showModal();
});

viewButton.addEventListener("click", () => {
  toggle.classList.add('.close-icon');
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
