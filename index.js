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
 obj = item;
 obj.price = Math.floor(Math.random()*100);
 cart.push(obj);
 console.log(item+" has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length === 0){
    return console.log("Your shopping cart is empty.");
  }
  else if(cart.length===1){
    return console.log("In your cart, you have "+cart[0].name+" at "+cart[0]+".");
  }
}

function total() {
  var total = 0.00;
  for (var i = 0; i < cart.length; i++){
    total += cart[i].price;
  }
  return total;
}

function removeFromCart(item) {
  cart.slice(item);

  if (cart[item] == null){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == "" || cardNumber == null){
    return console.log("Sorry, we don't have a credit card on file for you.");
  }
  else{
    cart.length = 0;
    return console.log("Your total cost is "+total()+", which will be charged to the card "+cardNumber+".");
  }
}
