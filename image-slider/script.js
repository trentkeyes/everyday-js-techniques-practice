const slides = document.querySelector(".images");

let currentSlide = 1;

document.querySelector(".arrow-left").addEventListener("click", (e) => {
  if (currentSlide > 1) {
    slides.classList.add(`pic${currentSlide - 1}`);
    slides.classList.remove(`pic${currentSlide}`);
    currentSlide--;
  }
});

document.querySelector(".arrow-right").addEventListener("click", (e) => {
  if (currentSlide < 5) {
    slides.classList.add(`pic${currentSlide + 1}`);
    slides.classList.remove(`pic${currentSlide}`);
    currentSlide++;
  }
});

document.querySelectorAll(".circle").forEach((element) => {
  element.addEventListener("click", (e) => {
    const circleID = e.target.id;
    slides.classList.add(`pic${circleID}`);
    slides.classList.remove(`pic${currentSlide}`);
    currentSlide = circleID;
  });
});
// try going by pic number, or take the current vh, chop off the vh, and add/multiply the number

// add animations between changes

// add event listeners to five buttons, highlighter
