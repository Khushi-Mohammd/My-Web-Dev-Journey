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

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let result = await Order.deleteMany({
      _id: { $in: customer.orders },
    });
    console.log(result);
  }
});

// Creating models for Order and Customer
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

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

// findCustomer();

const addCustomer = async () => {
  let newOrder = new Order({
    item: "Tea",
    price: 20,
  });

  let newCustomer = new Customer({
    name: "Jonas",
  });

  newCustomer.orders.push(newOrder);

  await newOrder.save();
  await newCustomer.save();

  console.log("Added a new customer");
};

// addCustomer();

const deleteCustomer = async () => {
  let result = await Customer.findByIdAndDelete("680a5f64139f2bf146570dee");
  console.log(result);
};

deleteCustomer();
