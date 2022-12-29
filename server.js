const express = require("express");
const app = express();
const path = require("path");
const ProductModel = require("./models/ProductModel");

// const ProductRouter = require("./routers/productRouter");
app.use("/publics", express.static(path.join(__dirname, "./publics")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/product.html"));
});

// app.use("/product", ProductRouter);

app.get("/product", async (req, res) => {
  try {
    const product = await ProductModel.find({});
    res.json({ product, status: 200, mess: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/product/:id", async (req, res) => {
  try {
    const deleteProduct = await ProductModel.findOne({ _id: req.params.id });
    res.json(deleteProduct);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3002, () => {
  console.log("http://localhost:3002");
});
