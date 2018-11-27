var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // item is a string, name of whatever item
 var itemTitle = `${item}`;
 
 var itemCost = Math.floor(Math.random() *Math.ceil(1) * Math.floor(100));
 var cartAddObject = cart.push({itemName: itemTitle, itemPrice: itemCost});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here

  if (cart.length) {
    var cartContents = `In your cart, you have ${cart[itemTitle]}`
    
    } else {
      var emptyCartStatement = "Your shopping cart is empty"
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
