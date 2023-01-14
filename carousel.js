// FOR MY IMAGE CAROUSEL (product slider).
// all the variables i need.
// all about the slides.
const track = document.querySelector('.carousel-img-track');
const slides_container = document.querySelector('.carousel-pic-container');
const my_slides = Array.from(track.children);

// the buttons.
const previous_button = document.querySelector('.left--button');
const next_button = document.querySelector('.right--button');

// Finding out the width of the first slide.

const my_slide_width = my_slides[0].getBoundingClientRect().width;
// 350 pixel (cm), is how much our last slide will move, to our third.
console.log(my_slide_width);

// don't put anything in the track container except from the carousel slides.
// calculating how much each slides will move from each other.

let my_slide_width_amount = my_slide_width[0] + 'px';
my_slide_width_amount = my_slide_width[1]*2 + 'px';
my_slide_width_amount = my_slide_width[2]*3 + 'px';
my_slide_width_amount = my_slide_width[3]*4 + 'px';
// my_slide_width_amount = my_slide_width[4] *5 + 'px';

// the movement.
function move_the_slide (current_slide, next_slide, previous_slide) {
    target_slide = my_slides.style.transform
}

// the buttons.
previous_button.addEventListener('click', () => {

})
