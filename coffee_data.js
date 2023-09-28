// Prompt 1:
// Clean the coffee_data file manually update the code:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

module.exports = {
    coffee: function () {},
  };
  
  function sum(acc, val) {
    return acc + val;
  }
  
  const coffeeMenu = [
    {
      name: "cappuccino",
      price: 8,
      seasonal: false,
    },
    {
      name: "espresso",
      price: 5,
      seasonal: false,
    },
    {
      name: "latte",
      price: 5,
      seasonal: false,
    },
    {
      name: "affogato",
      price: 9,
      seasonal: true,
    },
    {
      name: "macchiato",
      price: 6,
      seasonal: false,
    },
    {
      name: "americano",
      price: 7,
      seasonal: false,
    },
    {
      name: "iced coffee",
      price: 6,
      seasonal: false,
    },
    {
      name: "frappe",
      price: 8,
      seasonal: false,
    },
    {
      name: "cuban espresso",
      price: 10,
      seasonal: true,
    },
  ];
  console.table(coffeeMenu);
  module.exports = coffeeMenu;
  
  const cheapDrinks = coffeeMenu.filter((drink) => drink.price <= 5);
  console.table(cheapDrinks);
  
  const evenPricedDrinks = coffeeMenu.filter((drink) => drink.price % 2 === 0);
  console.table(evenPricedDrinks);
  
  const orders = [8, 5, 5, 9, 6, 7, 6, 8, 10];
  const total = orders.reduce((acc, price) => acc + price, 0);
  console.log(`Total of all orders: ${total}`);
  
  const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal);
  console.table(seasonalDrinks);
  
  const seasonalDrinksWithImportedBeans = seasonalDrinks.map(
    (drink) => `${drink.name} with imported beans`
  );
  
  console.table(seasonalDrinksWithImportedBeans);