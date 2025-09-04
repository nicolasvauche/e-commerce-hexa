import { Router } from "express";
import * as ProductsController from "../../../interface/http/ProductsController.js";

const router = Router();
router.get("/", ProductsController.list);
export default router;
