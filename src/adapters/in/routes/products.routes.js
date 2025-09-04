import { Router } from "express";
import { ListProductsUseCase } from "../../../application/ListProducts.js";
import { ProductsController } from "../../../interface/http/ProductsController.js";
import { ProductRepositorySqlite } from "../../out/persistence/sqlite/ProductsRepositorySqlite.js";
import { db } from "../../out/persistence/sqlite/db.js";

const router = Router();

const productRepositorySqlite = new ProductRepositorySqlite(db);
const listProductsUseCase = new ListProductsUseCase(productRepositorySqlite);
const productsController = new ProductsController(listProductsUseCase);

router.get("/", productsController.list.bind(productsController));

export default router;