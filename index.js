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
 var itemTitle = `${itemName}`;
 
 var itemCost = Math.floor(Math.random() *Math.ceil(1) * Math.floor(100));
 var cartAddObject = cart.push(itemObject);
 var itemObject = {itemName: itemTitle, itemPrice: itemCost};
 return `${itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here

  if (cart.length) {
    var cartContents = `In your cart, you have ${cart[itemTitle]}`
    for (var i =0; i < cart.length; i++) {
  cart[i] = "" + cart[i]
    }
  } else {
    var emptyCartStatement = "Your shopping cart is empty"
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  cart
}

function placeOrder(cardNumber) {
  // write your code here
}
