// NAVBAR.
// TO MAKE NAV-BAR WORK...
let toggle_navbar = document.querySelector('.toggle');
let active_nav_bar = document.querySelector('.nav-list');

// when we click on our toggle button.
toggle_navbar.addEventListener('click', () => {
    container.style.display = "block";
    // STYLES FOR THE CONTAINER WHEN I OPEN IT.
    active_nav_bar.style.display = "flex";
    active_nav_bar.style.flexDirection = "column";
    // what should happen wheni click on my nav-bar.

    console.log("i'm working");
})

// Create an element into the Nav-container (when opened)
let closeButton = document.createElement('img');
let container = document.getElementById('navigation-container');
container.append(closeButton);

// add attributes to this created element, to make it show the close button.
closeButton.setAttribute('src', '/images/icon-close.svg');
// add class to the button.
closeButton.className = 'close-button';

// Now, to make the close button close the nav-list, when we click on it.
// let closeButton = document.querySelector('.close-button');
// the event listener.
closeButton.addEventListener('click', () => {
    container.style.display = "none";
})


// THE CART ADD AND UN-ADD BUTTON (increment and decrement button).
const increase_button = document.querySelector('.increase');
const decrease_button = document.querySelector('.decrease');
let count = 0;
const display = document.getElementById('inc-dec-rate.');

// to connect the counting rate to display zero (that would be increased when we click our button).
// counting_rate.innerHTML = '0';
// counting_rate = 0;
// let demo = document.getElementById('demo').innerHTML= 'hii';

// click on + counting rate should be increase for as many times as possible.
increase_button.addEventListener ('click', () => {
    console.log('increase');
    // counting_rate++;
    // console.log(counting_rate);
})

// For the counting rate (logistics.)
// we want to increase the count rate as we click on the addition button.

// FUNCTIONS
function increase() {
    count++;
    display.innerText = count;
    let increased = display.innerText;
    console.log(increased);
}
function decrease () {
    count--;
    display.innerText = count;
    // if (count < 0) {
    //     display.innerText = "Can't go back."
    // }
}

// FOR THE ADD TO CART BUTTON.
const add_button = document.querySelector('.add-toCart-btn');
const openCart = document.querySelector('.cart-basket');

add_button.addEventListener('click', () => {
    const checkout_report = document.querySelector('.show-report');
    // class for the calculation.
    const calculation = document.querySelector('.calculation');
    // let number_of_items = increased;
    let increased = display.innerText;
    let calculated_price = 125 * increased;

    calculation.innerText = '$125.00 × ' + increased + '  ' + '$'+calculated_price;

    // calculated_price.setAttribute('class', 'total_price');
    // console.log(increased);
    // to display this number that was increased on the screen.
    // checkout_report.textContent = '$125.00' +increased + calculated_price;

    // get the class for display and style it to show, when we click on the add to cart button.
    checkout_report.style.display = 'flex';

    // for opening the cart when we click on the add-to-cart button.
    openCart.style.display = 'block';
})

// function open() {
//         openCart.style.display = 'block';
//         console.log("Open");
// }





// The Nav-List Container.
// let navBarcontainer = document.createElement('div');

// add some classes and id to newly created container.
// navBarcontainer.setAttribute('class','nav-container');

// put the nav-list inside the container.
// navBarcontainer.append(active_nav_bar);

// put the close button inside newly created container.
// navBarcontainer.append(closeButton);

// THAT'S ALL FOR NAV-BAR.


// ==========================================================================

// EVENT LISTENERS TAKE TWO PARAMETERS. THE TYPE OF EVENT, AND THE CALLBACK (what happens when we click on the element that we added the event-listeners to.).

// USING THE EVENT LISTENERS, THE TARGET ATTRIBUTE IS THE ATTRIBUTE THAT THE EVENTLISTENER WAS SET ON.

// USING EVENT-LISTENERS ON THIS ELEMENTS, IF WE CLICK ON THEM.

// function for opening nav-bar, comes here.

// just checking if it's working.

// console.log(e.target);


// BUBBLING IS CLICKING ON A CHILD ELEMENT, AND THIS CLICK AFFECTS THE PARENT AND THE GRAND-PARENT UNTIL THE VERY START OF THE DOCUMENT.
// my function.

// CAPTURING STARTS THE BEGINNING (outside), OF THE DOCUMENT, TILL THE TARGET ELEMENT, THAT WAS CLICKED ON.

// OUR 


    
// CAROUSEL LOGIC AND FUNCTIONALITIES

// THE BUTTON INCREMENTOR FOR ADD TO CART BUTTON.
// THE LOGIC FOR THE BUTTON.

// FOR THE CART
const cart_modal = document.querySelector(".cart-basket");
const openModal = document.querySelector(".open_modal_button");
const closeModal = document.querySelector(".close_modal_button");


openModal.addEventListener('click', ()=>{
// cart_modal.showModal();
cart_modal.style.display = 'block';
openModal.style.color = 'black';

})

closeModal.addEventListener('click', ()=> {
    // cart_modal.closeModal();
    cart_modal.style.display = 'none';
})