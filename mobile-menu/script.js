const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((element) => {
  element.addEventListener("click", () => {
    menuItems.forEach((element) => {
      element.classList.remove("selected");
    });
    element.classList.toggle("selected");
  });
});
