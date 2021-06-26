//jshint esversion:10
// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span'),
    quantity = product.querySelector('.quantity input'),
    currentSubtotal = product.querySelector('.subtotal span'),
    newSubtotal = Number(price.innerHTML) * Number(quantity.value);
  currentSubtotal.innerHTML = newSubtotal;
  return currentSubtotal.innerHTML;
}

let item = document.querySelector('.product');

updateSubtotal(item);

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = [...document.querySelectorAll('.product')];
  products.forEach((product) => updateSubtotal(product));

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  const subtotalArr = [...document.querySelectorAll('.subtotal span')];
  let newTotal = subtotalArr.reduce((accumulator, spanElement) => {
    return accumulator + Number(spanElement.innerHTML);
  }, 0);

  total.innerHTML = newTotal;
  return newTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
