var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = new Object();
 obj.name = item;
 obj.value = Math.floor(Math.random(100));
 cart.push(obj);
 console.log(item+" has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length === 0){
    return console.log("Your shopping cart is empty.");
  }
  else if(cart.length===1){
    return console.log("In your cart, you have lemons at "+cart[0]+".");
  }
}

function total() {
  for (var i = 0; i < cart.length; i++){
    
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
