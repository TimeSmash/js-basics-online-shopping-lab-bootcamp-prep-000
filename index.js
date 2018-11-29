var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // item is a string, name of whatever item
 
 var itemPrice = Math.floor(Math.random() *Math.ceil(1) * Math.floor(100));
 var itemObject = {itemName: itemName, itemPrice: itemPrice};
 var cartAddObject = cart.push(itemObject);
 cartAddObject;
 return `${itemName} has been added to your cart.`;
}

function viewCart() {
  //needs to loop over every item in cart, returning contents like "itemName at itemPrice"
//how to access key in object?
  if (cart.length) {
    var cartContents = `In your cart, you have `;
      if (cart.length === 1) {
      return cartContents + `${cart.itemName} at ${cart.itemPrice}`;
      } 
        else if (cart.length === 2) {
        var filler = "bla"
        } else {
          //code for more than 2 items goes here
        }
  }
  else {
    for (var i = 0; i < cart.length; i++) {
  cart[i] = "" + cart[i]
    }
    var emptyCartStatement = "Your shopping cart is empty"
    }
}

function total() {
  //needs to take all itemPrice values in objects in cart and add them
  // something like might work tomorrow
  while (cart.length) {
  var totalPrice = parseInt(`${priceArray.slice(-1)}`) + parseInt(`${priceArray.slice(-1)}`)
  }
  return totalPrice;

function removeFromCart(item) {
  cart
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    
  }
  else{
  }
}
