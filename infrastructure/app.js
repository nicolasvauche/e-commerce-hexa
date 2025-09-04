import express from "express";
import ProductsRoutes from "../src/adapters/in/routes/products.routes.js";

const app = express();

app.use(express.json());

app.use("/products", ProductsRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the E-commerce API",
  });
});

export default app;
