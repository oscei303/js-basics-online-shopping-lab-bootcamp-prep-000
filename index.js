var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var price = Math.floor(100*(Math.random())) % 100 + 1;
  var itemObj = { 
                  itemName: item,
                  itemPrice: price
                };
  cart.push(itemObj);
  return (`${itemObj.itemName} has been added to your cart.`);
}

function viewCart() {
    if(cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else if (cart.length > 1){
      let string = `In your cart, you have `
      for (let i = 0; i < cart.length; i++){
        string += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
        if(i === cart.length - 1){
          return string += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`}}
    }
    else{
      return `Your shopping cart is empty.`
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
