const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// Schema for an order
const orderSchema = new Schema({
  item: String,
  price: Number,
});

// Schema for a customer with a reference relationship
// The 'orders' field is an array of ObjectIds that reference the 'Order' model
const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId, // References the ObjectId of an Order document
      ref: "Order", // Specifies the model being referenced
    },
  ],
});

// Creating models for Order and Customer
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Function to add multiple orders to the database
// Demonstrates creating multiple documents in the 'Order' collection
// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: 15 }, // Adding a new order for 'Samosa'
//     { item: "Chips", price: 20 }, // Adding a new order for 'Chips'
//     { item: "Chocolate", price: 40 }, // Adding a new order for 'Chocolate'
//   ]);

//   console.log(res); // Logs the result of the inserted orders
// };

// addOrders();

// Function to add a customer and associate orders with them
// Demonstrates a one-to-many relationship where a customer can have multiple orders
// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "Peter Parker", // Creating a new customer
//   });

//   // Finding existing orders to associate with the customer
//   let order1 = await Order.findOne({ item: "Chips" });
//   let order2 = await Order.findOne({ item: "Chocolate" });

//   // Adding the orders to the customer's 'orders' array
//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   // Saving the customer document with the associated orders
//   let result = await cust1.save();
//   console.log(result);
// };

// addCustomer();

// const findCustomer = async () => {
//   let result = await Customer.find({});
//   console.log(result[0]); // Logs the first customer
// };

// Function to find customers and populate their orders
// This retrieves the customer data along with the full details of their associated orders
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders"); // Populates the 'orders' field with the actual Order documents
  console.log(result[0]); // Logs the first customer with their populated orders
};

findCustomer();
