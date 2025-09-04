import express from "express";
import { createProductsRouter } from "../src/adapters/in/routes/products.routes.js";

import { db } from "../src/adapters/out/persistence/sqlite/db.js";
import { ProductRepositorySqlite } from "../src/adapters/out/persistence/sqlite/ProductsRepositorySqlite.js";

import { ListProductsUseCase } from "../src/application/ListProducts.js";
import { ProductsController } from "../src/interface/http/ProductsController.js";

const app = express();
app.use(express.json());

// Wiring (choix d'implémentation) —> ici on injecte l'adapter concret
const productsRepository = new ProductRepositorySqlite(db);
const listProductsUseCase = new ListProductsUseCase(productsRepository);
const productsController = new ProductsController(listProductsUseCase);

// La route ne connaît que le controller
app.use("/products", createProductsRouter({ productsController }));

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the E-commerce API" });
});

export default app;
