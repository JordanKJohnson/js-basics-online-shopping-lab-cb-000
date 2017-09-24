var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);

 cart.push({
   [item]: price,
   price: price,
   name: item
 });
 console.log(item+" has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length === 0){
    return console.log("Your shopping cart is empty.");
  }
  else if(cart.length===1){
    return console.log("In your cart, you have "+cart[0].name+" at $"+cart[0].price+".");
  }
  else if(cart.length===2){
    return console.log("In your cart, you have "+cart[0].name+" at $"+cart[0].price+" and "+cart[1].name+" at $"+cart[1].price+".");
  }
  else if(cart.length>=3){
    var buildString = "In your cart, you have "+cart[0].name+" at $"+cart[0].price+", ";
    for (var i = 1; i < cart.length; i++){
      if (i < (cart.length-1)){
        buildString += cart[i].name+" at $"+cart[i].price+", ";
      }
      else if (i == (cart.length-1)){
        buildString += "and "+cart[i].name+" at $"+cart[i].price+".";
      }
    }
    return console.log(buildString);
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    total += cart[i].price;
  }

  return total;
}

function totalAmt() {
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    total += cart[i].price;
  }

  cart.length = 0;
  return total;
}

function removeFromCart(item) {
  for (var key in cart){
    if (cart[key].name == item) cart.splice(key,1);
  }

  if (cart[item] == null){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == "" || cardNumber == null){
    return console.log("Sorry, we don't have a credit card on file for you.");
  }
  else{
    return console.log("Your total cost is $"+totalAmt()+", which will be charged to the card "+cardNumber+".");
  }
}
