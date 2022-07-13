const slides = document.querySelector(".images");

let currentSlide = 1;

document.querySelector(".arrow-left").addEventListener("click", (e) => {
  if (currentSlide > 1) {
    slides.classList.add(`pic${Number(currentSlide) - 1}`);
    slides.classList.remove(`pic${Number(currentSlide)}`);
    document
      .getElementById(`${Number(currentSlide) - 1}`)
      .classList.add("current");
    document
      .getElementById(`${Number(currentSlide)}`)
      .classList.remove("current");
    currentSlide--;
  }
});

document.querySelector(".arrow-right").addEventListener("click", (e) => {
  if (currentSlide < 5) {
    slides.classList.add(`pic${Number(currentSlide) + 1}`);
    slides.classList.remove(`pic${Number(currentSlide)}`);
    document
      .getElementById(`${Number(currentSlide) + 1}`)
      .classList.add("current");
    document
      .getElementById(`${Number(currentSlide)}`)
      .classList.remove("current");
    currentSlide++;
  }
});

document.querySelectorAll(".circle").forEach((element) => {
  element.addEventListener("click", (e) => {
    const circleID = e.target.id;
    slides.classList.add(`pic${circleID}`);
    slides.classList.remove(`pic${currentSlide}`);
    console.log(`pic${currentSlide}`);
    e.target.classList.add("current");
    document.getElementById(`${currentSlide}`).classList.remove("current");
    currentSlide = circleID;
  });
});

// add animations between changes

// add highlighter to circles
