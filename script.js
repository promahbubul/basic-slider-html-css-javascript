const leftButton = document.querySelector(".leftbutton");
const rightButton = document.querySelector(".rightbutton");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider-image");

let sliderNumber = 1;
const length = images.length;

// Right button Slider
rightButton.addEventListener("click", function () {
  if (sliderNumber < length) {
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
    sliderNumber++;
  } else {
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
  }
});

// left button slider
leftButton.addEventListener("click", function () {
  if (sliderNumber > 1) {
    slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
    sliderNumber--;
  } else {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    sliderNumber = length;
  }
});

// -----------------------------------------------------------Logic----------------------
