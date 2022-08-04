// ITERATION 1

function updateSubtotal(product) {
  //alert('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = Number(product.querySelector('.quantity input').value);
  let totalprice = price * quantity;
  product.querySelector('.subtotal span').innerHTML = totalprice;
  return totalprice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  
  
  
  
  
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  document.querySelector('h2 span').innerHTML = //falta variable de todos los subttoals
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
