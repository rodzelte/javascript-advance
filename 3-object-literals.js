let groceryList = {
  name: "Apples",
  quantity: 4,
  display: () => {
    console.log(`Grocery List: ${groceryList.quantity}x${groceryList.name}`);
  },
};

groceryList.display();
