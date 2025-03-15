function GroceryItem (name, quantity) {
    this.name = name,
    this.quantity = quantity,
    this.display = function () {
      console.log(`Grocery List: ${groceryList.quantity}x${groceryList.name}`);
    }
 
};
  
const item = new GroceryItem("Apples", 4);

item.GroceryIsle = "Produce";

  