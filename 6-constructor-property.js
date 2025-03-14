function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = () => {
    console.log(`Grocery List: ${this.quantity} x ${this.name}`);
  };
}

const apples = new GroceryItem("Apples", 4);
console.log(apples.constructor);
