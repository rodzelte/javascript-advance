function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = () => {
    console.log(`Grocery List: ${this.quantity} x ${this.name}`);
  };
}

function calculatePrice(GroceryItem, price) {
  return GroceryItem.quantity * price;
}

const performCalculation = calculatePrice;

const apples = new GroceryItem("Apples", 4);

console.log(performCalculation(apples, 0.5));
