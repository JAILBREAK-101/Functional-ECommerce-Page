// // WE NEED THE INDICATOR PICTURE.
// const picture_click = document.querySelector('.indicator-pic');
// WHERE THE PICTURES UNDER ARE.
const indicator_pic_container = document.querySelector('.carousel-indicators');
// // THE INDEX OF THE VERY INDICATOR PICTURE.
// // The children of the container, to find the very picture.

// // To find the index of the clicked picture.

// const indicator_pic_index = indicator_pic_container

// AGAIN. (FOR DIALOG)
const dialog_carousel = document.getElementById('carousel');

let carousels_track = document.querySelector('.dialog-image-track');

// const main_caru_container = document.getElementById('caru-container');
const indicator_pictures = Array.from(indicator_pic_container.children);

// THE BUTTONS.
let prev_button = document.querySelector('#dialog .left--button');
//  onclick =  ONCLICK();

//  function ONCLICK() {
//     alert("I'M WORKING.");
//  }
let next_button = document.querySelector('#dialog .right--button');

// the one from the normal carousel (the indicator pictures)
const picture_container = document.querySelector('.lightbox .images-container');

// the images in the slides.
const dialog_pic_container = document.querySelector('#dialog .carousel-pic-container');

// slides in dialog box.
const slides = Array.from(dialog_pic_container.children);

const slide_size = slides[1].getBoundingClientRect();

const slide_width = slide_size.width;

// for when i click on any picture below, in the container open the modal.
picture_container.addEventListener('click', e =>{
    const target_picture = e.target.closest('img');

    if (!target_picture) return;
    dialog_carousel.open = true;
    // alert('working')
})

// THIS IS WHERE THE MAIN CAROUSEL STARTS FROM.
// getting the width of our picture in the modal carousel.
let picture_width = slides[0].getBoundingClientRect().width;


// the width of each slides, how much it'll take the first to move to the second.
// function moving_slides () {
    // const movement = picture_container.children(target_picture) + picture_width + 'px';
    // EACH SLIDE'S WIDTH FROM THE FIRST.
    slides[0].style.left = 0;
    slides[1].style.left = picture_width * 2 + 'px';
    slides[2].style.left = picture_width * 3 + 'px';
    slides[3].style.left = picture_width * 4 + 'px';
    // }

// THE ACTUAL MOVEMENT (CALCULATION).
function moving_slides (carousels_track, current_slide, targetted_slide) {
        carousels_track.translate = 'translateX (' + targetted_slide.style.left + ')';
    // find the next and previous slides.
    // current_slide = document.getElementById('.slide-');
    current_slide.classList.remove('active-slide');
    targetted_slide.classList.add('active-slide');
}


// function target_list () {
//     let current_slide = document.getElementById('slide-on');
//     current_slide.classList.remove('slide-on');
//     let target_slide = current_slide + moving_slides();
//     target_slide.classList.add('slide-on');
// }

// let target_list = (current_slide, target_slide) => {
    
// }
// target_slide();

// THE NEXT BUTTON.
next_button.addEventListener('click', e => {
    let current_slide = carousels_track.querySelector('.active-slide');
    const next_slide = current_slide.nextElementSibling;
    console.log(next_slide, current_slide);
    // current_slide.classList.remove('slide-on');
    // next_slide.classList.add('slide-on');
    // console.log(next_slide);
    moving_slides(carousels_track, current_slide, next_slide);
    // target_slide(current_slide, next_slide);
})



// determine each picture for click to activate modal.