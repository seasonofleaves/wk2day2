const shopItems = [
  { name: `Chocolate Chips`, price: 0.25, quantity: 0, type: `topping` },
  { name: `Sprinkles`, price: 0.25, quantity: 0, type: `topping` },
  { name: `Cookie Dough`, price: 0.5, quantity: 0, type: `topping` },
  { name: `Vanilla`, price: 4, quantity: 0, type: `icecream` },
  { name: `Chocolate`, price: 4, quantity: 0, type: `icecream` },
  { name: `Strawberry`, price: 4, quantity: 0, type: `icecream` },
  { name: `Cone`, price: 1, quantity: 0, type: `cone` },
  { name: `Bowl`, price: 3, quantity: 0, type: `cone` },
  { name: `Large Cone`, price: 4, quantity: 0, type: `cone` },
]

function orderItem(selectedItemName) {
  console.log(`ordering`, selectedItemName)
  let itemOrdered = null
  for (let i = 0; i < shopItems.length; i++) {
    let item = shopItems[i]
    if (item.name == selectedItemName) {
      console.log('found', item);
      itemOrdered = item
    }
  }

  itemOrdered.quantity += 1
  drawOrder()
}

function calculateOrderTotal() {
  let orderTotal = 0
  for (let i = 0; i < shopItems.length; i++) {
    let item = shopItems[i]
    orderTotal += item.price * item.quantity
  }
  console.log('💳', orderTotal);

  return orderTotal
}

function drawOrder() {
  let orderElm = document.getElementById('order')
  let orderContent = ``
  for (let i = 0; i < shopItems.length; i++) {
    console.log(i, shopItems[i]);
    let item = shopItems[i]
    console.log(`${item.quantity}x ${item.name} $${item.price * item.quantity}`);
    if (item.quantity > 0) {
      orderContent += `<p>${item.quantity}x ${item.name} $${(item.price * item.quantity).toFixed(2)}</p>`
    }
  }
  console.log(orderContent);
  orderElm.innerHTML = orderContent

  let customerTotal = calculateOrderTotal()
  console.log('You owe me', customerTotal);
  let totalElm = document.getElementById('total')
  totalElm.innerText = customerTotal.toFixed(2)

}
