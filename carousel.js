// FOR THE CAROUSEL.
const buttons = document.querySelectorAll("[data-buttons]");

// THIS IS FOR THE DESKTOP VIEW (the indicators)
const imageSlides = document.querySelectorAll("[data-slides] img");
const imageIndicators = document.querySelector("[data-indicator]");

let arrayOfImages = Array(imageIndicators.children);

// For the mobile carousel
let slideTrack = document.querySelector("[data-slides]");
// buttons.forEach((button) => {});

imageIndicators.addEventListener("click", (e) => {
  let image = e.target.closest("img");
  // If we click on an image in the group
  if (image) {
    // alert("CLOSEST");
    // image.parentElement.classList.add("image-border");
    // image.classList.add("img-opacity");
    // console.log(imageIndicators.children.item(image));
    let nextClicked = arrayOfImages.findIndex((targetImage) => {
      targetImage === image;
      return targetImage;
    });

    let currentImageIndicator;
    console.log(nextClicked);
    applyImageClass(image, nextClicked);

    moveToIndicatedPic(currentSlide, image);

    // console.log(value);
  }
});

// ARRAY METHODS (filter)
// OBJECTS AND THEIR METHODS

// FIND THE INDEX OF THE CLICKED IMAGE, AND MAKE IT EQUAL TO THE INDEX OF THE PROPORTIONAL CAROUSEL IMAGE AND SET THE ACTIVE CLASS ON THE SAME INDEX IMAGE.

// FOR THE LIGHTBOX

// THE MOBILE VIEW CAROUSEL.
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let target = e.target.closest("button");
    if (!target) return;
    let activeSlide = slideTrack.querySelector(".active");
    let nextSlide = activeSlide.nextElementSibling;
    let prevSlide = activeSlide.previousElementSibling;

    let nextIndex = Array(slideTrack).findIndex((slide) => slide === nextSlide);
    let prevIndex = Array(slideTrack).findIndex((slide) => slide === prevSlide);

    if (target.className == "next-button") {
      if (nextSlide == null) return;
      moveToTargetSlide(activeSlide, nextSlide);
    }
    // if maximum
    else if (target.className == "prev-button") {
      if (prevSlide == null) return;
      moveToTargetSlide(activeSlide, prevSlide);
      // if last slide
    }
    // if (target)
  });
});

// FIND THE NEXT ELEMENT

function moveToTargetSlide(currentSlide, targetSlide) {
  currentSlide.classList.remove("active");
  targetSlide.classList.add("active");
}

// THIS IS FOR THE INDICATOR PHOTO
function moveToIndicatedPic(currentSlide, clickedIndicatorPic) {}

function applyImageClass(currentImage, targetImage) {
  currentImage.classList.remove("image-border");
  currentImage.classList.remove("img-opacity");

  targetImage.classList.add("image-border");
  targetImage.classList.add("img-opacity");
}

// TO OPEN THE LIGHTBOX.
