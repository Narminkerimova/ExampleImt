import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

mongoose
  .connect(
    "mongodb+srv://narmingkbf206:narmin28311007_@cluster0.etsr5ne.mongodb.net/"
  )
  .then(() => console.log("Connected"))
  .catch(() => console.log("NOT Connected"));

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Products = mongoose.model("Product", productSchema);

app.use(express.json());
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", async (req, res) => {
  const prod = await Products.find();
  res.send(prod);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const prod = await Products.findById(id);
  res.send(prod);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const prod = await Products.findByIdAndDelete(id);
  res.send(prod);
});
app.delete("/productsDel/", async (req, res) => {
  const prod = await Products.deleteMany({ price:undefined  });
  res.send(prod);
});

app.put("/products", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const prod = await Products.findByIdAndUpdate(id,body);
  res.send(prod);
});

app.post("/products", async (req, res) => {
  const { body } = req;
  const prod = await Products.create(body);
  res.send(prod);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
