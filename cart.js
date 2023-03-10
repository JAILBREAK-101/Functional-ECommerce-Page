// THE CART OF OUR ECOMMERCE PAGE

// THE CART ADD AND UN-ADD BUTTON (increment and decrement button).
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
let count = 0;
const display = document.getElementById("inc-dec-rate.");

// FOR THE ADD TO CART BUTTON.
const addButton = document.querySelector(".add-toCart-btn");
const openCart = document.querySelector(".cart-basket");

// FOR THE CART
const emptyIndicator = document.querySelector(".empty-ind");
const itemsCount = document.querySelector(".items-count");
const cartModal = document.querySelector(".cart-basket");
const openModal = document.querySelector(".open_modal_button");
const closeModal = document.querySelector(".close_modal_button");
const deleteButton = document.querySelector(".delete-button");
const checkoutButton = document.querySelector(".checkout-btn");
const checkoutReport = document.querySelector(".checkout-report");
const showReport = document.querySelector(".show-report");

// Adding to the cart (functionality)
// === increment ===
function increase() {
  count++;
  display.innerText = count;
  let increased = display.innerText;
  console.log(increased);
}

// === decrement ===
function decrease() {
  if (count < 1) return;
  count--;
  display.innerText = count;
  // if (count < 0) {
  //     display.innerText = "Can't go back."
  // }
}

// click on + counting rate should be increase for as many times as possible.
// increase_button.addEventListener("click", () => {
//   console.log("increase");
// });
function cartFunctionality() {
  // Remove what we see, when we add to our cart.
  emptyIndicator.classList.remove("open");
  emptyIndicator.classList.add("close");
  checkoutReport.classList.remove("close");
  checkoutReport.classList.add("open");

  if (cartModal.className.includes("close")) {
    cartModal.classList.remove("close");
    cartModal.classList.add("display-flex");
  } else if (cartModal.className !== "close") {
    cartModal.classList.add("display-flex");
  }

  closeModal.addEventListener("click", () => {
    cartModal.classList.remove("display-flex");
    cartModal.classList.add("close");
  });

  deleteButton.addEventListener("click", () => {
    // delete the checkout report (that particular one)
    checkoutReport.classList.remove("open");
    checkoutReport.classList.add("close");
    itemsCount.innerText = 0;
  });
}

openModal.addEventListener("click", () => {
  cartFunctionality();
});

addButton.addEventListener("click", () => {
  // for opening the cart when we click on the add-to-cart button.
  // if (cartModal.contains(checkoutReport)) {
  // }
  if (count === 0) return;

  // class for the calculation.
  const calculation = document.querySelector(".calculation");
  const price = document.getElementById("price");
  // let number_of_items = increased;
  let increased = display.innerText;
  let calculatedPrice = 125 * increased;

  calculation.innerText = "$125.00 ?? " + increased + "  ";
  price.innerText = "$" + calculatedPrice;

  calculation.classList.add("normal");
  price.classList.add("bold");
  // get the class for display and style it to show, when we click on the add to cart button.
  showReport.style.display = "flex";

  itemsCount.innerText = count;

  cartFunctionality();
});
