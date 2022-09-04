let shopping_cart_total = 0;
let shopping_cart = [];

function calc_cart_total() {
  shopping_cart_total = 0;
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }

  // dom업데이트 합수()
  // 아이콘 업데이트 함수()
  // 세금 dom 업데이트 함수();
}

function calc_total(shoppingCart) {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    let item = shoppingCart[i];
    total += item.price;
  }

  return total;
}
