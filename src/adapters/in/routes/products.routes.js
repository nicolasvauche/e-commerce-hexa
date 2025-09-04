import { Router } from "express";
import { ListProductsUseCase } from "../../../application/ListProducts.js";
import { ProductsController } from "../../../interface/http/ProductsController.js";

const router = Router();
const listProductsUseCase = new ListProductsUseCase();
const productsController = new ProductsController(listProductsUseCase);
router.get("/", productsController.list.bind(productsController));
export default router;
