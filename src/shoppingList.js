class ShoppingList {
  constructor() {
    // The empty array of items in your shopping cart
    this.cart = []
  }

  // Adds Item to cart
  addItem(add_item) {
    const newItem = new Item(add_item)
    this.cart.push(newItem)
  }

  render() {
    // Returns all items in the cart that renders the item
    // Remember returning in items.js `<li>this.item<li>`
    let items_in_cart = this.cart.map(item => item.render()).join('')
    console.log(items_in_cart);
    return `<ol>${items_in_cart} </ol>`
  }
}
