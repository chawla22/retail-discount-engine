console.log("Retail Discount Engine  - Challenge 4");
console.log("---------------------------------");

// Step 2: Product inventory setup
// Each product should include a name, category, price, and inventory count.
let products = [
  { name: "Laptop", category: "Electronics", price: 1200, inventory: 10 },
  { name: "Smartphone", category: "Electronics", price: 800, inventory: 20 },
  { name: "Jeans", category: "Apparel", price: 50, inventory: 30 },
  { name: "Bread", category: "Groceries", price: 5, inventory: 15 },
  { name: "Mop", category: "Household", price: 20, inventory: 5 },
];
console.log("Initial Product Inventory:");
for (let product of products) {
  console.log(`${product.name} - $${product.price} (${product.inventory} in stock)`);
}

// Step 5: Simulate checkout for 3 different customer types
let customerTypes = ["student", "senior", "regular"];
let discountedPrice=0;

for (let i = 0; i < customerTypes.length; i++) {
  let customerType = customerTypes[i];
  let extraDiscount = 0;

  // Step 4: Extra discount based on customer type
  if (customerType === "student") {
    extraDiscount = 0.05; // 5% extra off

  } else if (customerType === "senior") {
    extraDiscount = 0.07; // 7% extra off

  } else if (customerType === "regular") {
    extraDiscount = 0; // 0% extra off

  } else {
    console.log(`Unknown customer type "${customerType}". No extra discount.`);
  }

  let totalCost = 0;
  
  console.log(`\nCustomer ${i + 1} Type: ${customerType}`);

  // Go through each product in the cart
  for (let product of products) {
    let discount = 0;

    // Step 3: Category-based discount
    switch (product.category.toLowerCase()) {
      case "electronics":
        discount = 0.2;
        break;
      case "apparel":
        discount = 0.15;
        break;
      case "groceries":
      case "household":
        discount = 0.1;
        break;
      default:
        discount = 0;
    }

    discountedPrice = product.price * (1 - discount);
    // console.log("discountedPrice:", discountedPrice);
     //apply extra discount based on customer type
    let finalPrice = discountedPrice * (1 - extraDiscount);
    // console.log("finalPrice:", finalPrice);
    let quantity = 2;

    if (product.inventory < quantity) {
      console.log(`Sorry, not enough stock for ${product.name}.`);
      continue;
    }

    let itemTotal = finalPrice * quantity;
    totalCost += itemTotal;
    product.inventory -= quantity;

    console.log(
      `Bought ${quantity} x ${product.name} @ $${finalPrice.toFixed(2)} = $${itemTotal.toFixed(2)}`);
  }

  console.log(`Total Cost for Customer ${i + 1}: $${totalCost.toFixed(2)}`);
}

// Step 6: Display one product's details after discount (using for...in)
console.log("\n---------------------------------");
console.log("Product Details After Discounts:");
console.log("---------------------------------");
let exampleProduct = products[0];
  let discount = 0;

    // Step 3: Category-based discount
    switch (exampleProduct.category.toLowerCase()) {
      case "electronics":
        discount = 0.2;
        break;
      case "apparel":
        discount = 0.15;
        break;
      case "groceries":
      case "household":
        discount = 0.1;
        break;
      default:
        discount = 0;
    }

    discountedPrice = exampleProduct.price * (1 - discount);

for (let key in exampleProduct) {
  if (key === "price") {
    console.log(`${key}: $${discountedPrice.toFixed(2)} (after discount)`);
  } else {
    console.log(`${key}: ${exampleProduct[key]}`);
  }
}

// Step 7: Display all product info using Object.entries and destructuring to log all product info after inventory is updated.
console.log("\n---------------------------------");
console.log("All Product Info After Inventory Update:");
console.log("---------------------------------");
for (let product of products) {
  console.log(`\n${product.name}`);
  for (let [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
  }
}
