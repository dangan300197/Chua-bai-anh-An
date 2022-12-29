const express = require("express");
const router = express.Router();
const ProductModel = require("../models/ProductModel");

router.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find({});
    res.json({ product, status: 200, mess: "tho con rat dot" });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await ProductModel.findOne({ _id: req.params.id });
    console.log(deleteProduct);
  } catch (error) {
    console.log(error);
  }
});
// module.exports = router;
