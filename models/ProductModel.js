const mongoose = require("../connects/dbConnect");

const ProductSchema = mongoose.Schema(
  {
    nameProduct: String,
    quantity: Number,
    price: Number,
  },
  { collection: "Product" }
);

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
