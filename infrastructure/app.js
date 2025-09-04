import 'dotenv/config';
import express from "express";
import { createProductsRouter } from "../src/adapters/in/routes/products.routes.js";

import { ListProductsUseCase } from "../src/application/ListProducts.js";
import { ProductsController } from "../src/interface/http/ProductsController.js";

// Adapters
import { db } from "../src/adapters/out/persistence/sqlite/db.js";
import { ProductRepositorySqlite } from "../src/adapters/out/persistence/sqlite/ProductsRepositorySqlite.js";
import { ProductsRepositoryInMemory } from "../src/adapters/out/persistence/memory/ProductsRepositoryInMemory.js";

const app = express();
app.use(express.json());

// Choix de la data source
const dataSource = (process.env.DATA_SOURCE ?? "sqlite").toLowerCase();

const productsRepository =
  dataSource === "memory"
    ? new ProductsRepositoryInMemory()
    : new ProductRepositorySqlite(db);

const listProductsUseCase = new ListProductsUseCase(productsRepository);
const productsController = new ProductsController(listProductsUseCase);

app.use("/products", createProductsRouter({ productsController }));

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the E-commerce API" });
});

export default app;
