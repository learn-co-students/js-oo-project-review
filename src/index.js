class App {
  constructor() {
    // Sets <div id=''> to a variable
    this.listContainer = document.getElementById('shopping-list')
    this.itemText = document.getElementById('add_item')
    this.submitItem = document.getElementById('submit-item')

    // Event listner will call the onSubmit method below
    this.submitItem.addEventListener('click', this.onSubmit.bind(this))

    this.shoppingList = new ShoppingList()
  }

  onSubmit() {
    event.preventDefault() // prevents the defualt submit html action

    // Sets the what every you type in the input box to const item
    const add_item = this.itemText.value

    // On top we set a new ShoppingList to a variable called this.shoppingList
    // ShoppingList class will have a method called addItem()
    this.shoppingList.addItem(add_item)

    // Just resets the texts in the input box
    this.itemText.value = ''
    this.render()
  }

  render() {
    return this.listContainer.innerHTML = this.shoppingList.render()
  }
}

const ShoppingTime = new App()

ShoppingTime.render()
