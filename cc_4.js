//  In this challenge, you’ll build a basic retail discount engine using JavaScript conditionals and loops. This tool will simulate pricing decisions based on customer types, product inventory levels, and promotional categories.
// You will practice decision-making using if, else if, and switch statements, then use loops to cycle through customer orders and inventory updates. The engine must evaluate multiple pricing rules and apply dynamic business logic across an inventory dataset.
// Important Note
// Test your logic using console.log(). Use comments to explain your control structures and avoid redundant conditions. Use break statements to avoid switch case fall-through.


// Step 1: Create a new JavaScript file called cc_4.js and link it to an index.html file.

console.log("Retail Discount Engine  - Challenge 4");


// Step 2: Create an array of objects representing 5 products. 
// Each product should include a name, category, price, and inventory count.

var products = [
    { name: "Laptop", category: "Electronics", price: 1200, inventory: 10 },
    { name: "Smartphone", category: "Electronics", price: 800, inventory: 20 },
    { name: "Jeans", category: "Clothing", price: 50, inventory: 30 },
    { name: "Sneakers", category: "Footwear", price: 100, inventory: 15 },
    { name: "Watch", category: "Accessories", price: 200, inventory: 5 }
];

console.log("Products:", products);