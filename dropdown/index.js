const dropdownMenuEvent = (() => {
  console.log("testing");
  document.querySelectorAll(".dropbtn").forEach((element) => {
    element.addEventListener("click", () => {
      element.children[0].classList.toggle("reveal");
    });
  });
})();
