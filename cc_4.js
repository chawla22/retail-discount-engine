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
    { name: "Jeans", category: "Apparel", price: 50, inventory: 30 },
    { name: "Bread", category: "Groceries", price: 5, inventory: 15 },
    { name: "Mop", category: "Household", price: 20, inventory: 5 }
];

console.log("Products:", products);

// Write a for...of loop that cycles through each product and applies a dynamic discount based on category. 
// Use a switch statement for:
// o	"electronics": 20% off
// o	"apparel": 15% off
// o	"groceries" and "household": 10% off
// o	default: No discount

for (let product of products) {
    let discount = 0;

    switch (product.category.toLowerCase()) {
        case "electronics":
            discount = 0.20; // 20% off
            break;
        case "apparel":
            discount = 0.15; // 15% off
            break;
        case "groceries":
        case "household":
            discount = 0.10; // 10% off
            break;
        default:
            discount = 0; // No discount
    }

    // Calculate the discounted price
    let discountedPrice = product.price * (1 - discount);
    console.log(`Product: ${product.name}, Original Price: $${product.price}, Discounted Price: $${discountedPrice.toFixed(2)}`);




}
