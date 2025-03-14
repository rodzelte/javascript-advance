let groceryList = {
  name: "Apples",
  quantity: 4,
  display: () => {
    console.log(`Grocery List: ${groceryList.quantity}x${groceryList.name}`);
  },
};

let createGroceryList = (name, quantity) => {
  return {
    name,
    quantity,
    display: () => {
      console.log(`Grocery List: ${quantity} x ${name}`);
    },
  };
};

createGroceryList("Bananas", 6).display();
