// FOR THE CAROUSEL.
const buttons = document.querySelectorAll("[data-buttons]");

// THIS IS FOR THE DESKTOP VIEW (the indicators)
const imageSlides = document.querySelectorAll("[data-slides] img");

let activeslide = document.querySelector("[data-active]");
const imageIndicators = document.querySelector("[data-indicator]");

// buttons.forEach((button) => {});

imageIndicators.addEventListener("click", (e) => {
  let image = e.target.closest("img");
  // If we click on an image in the group
  if (image) {
    // alert("CLOSEST");
    image.parentElement.classList.add("image-border");
    image.classList.add("img-opacity");
    // console.log(imageIndicators.children.item(image));
    console.log(image.alt);
    console.log(imageSlides[0].alt);



    console.log(value);
  }
});

// ARRAY METHODS (filter)
// OBJECTS AND THEIR METHODS

// FIND THE INDEX OF THE CLICKED IMAGE, AND MAKE IT EQUAL TO THE INDEX OF THE PROPORTIONAL CAROUSEL IMAGE AND SET THE ACTIVE CLASS ON THE SAME INDEX IMAGE.

// FOR THE LIGHTBOX

// THE MOBILE VIEW CAROUSEL.

