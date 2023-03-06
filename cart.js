// THE CART OF OUR ECOMMERCE PAGE

// THE CART ADD AND UN-ADD BUTTON (increment and decrement button).
const increase_button = document.querySelector(".increase");
const decrease_button = document.querySelector(".decrease");
let count = 0;
const display = document.getElementById("inc-dec-rate.");

// FOR THE ADD TO CART BUTTON.
const add_button = document.querySelector(".add-toCart-btn");
const openCart = document.querySelector(".cart-basket");

// FOR THE CART
const cart_modal = document.querySelector(".cart-basket");
const openModal = document.querySelector(".open_modal_button");
const closeModal = document.querySelector(".close_modal_button");

// === increment ===
function increase() {
  count++;
  display.innerText = count;
  let increased = display.innerText;
  console.log(increased);
}

// === decrement ===
function decrease() {
  count--;
  display.innerText = count;
  // if (count < 0) {
  //     display.innerText = "Can't go back."
  // }
}

// click on + counting rate should be increase for as many times as possible.
increase_button.addEventListener("click", () => {
  console.log("increase");
});

add_button.addEventListener("click", () => {
  const checkout_report = document.querySelector(".show-report");
  // class for the calculation.
  const calculation = document.querySelector(".calculation");
  // let number_of_items = increased;
  let increased = display.innerText;
  let calculated_price = 125 * increased;

  calculation.innerText =
    "$125.00 × " + increased + "  " + "$" + calculated_price;

  // get the class for display and style it to show, when we click on the add to cart button.
  checkout_report.style.display = "flex";

  // for opening the cart when we click on the add-to-cart button.
  openCart.style.display = "block";
});

openModal.addEventListener("click", () => {
  cart_modal.style.display = "block";
  openModal.style.color = "black";
});

closeModal.addEventListener("click", () => {
  cart_modal.style.display = "none";
});
