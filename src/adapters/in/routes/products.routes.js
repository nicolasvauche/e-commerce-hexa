import { Router } from "express";

// La route reçoit le controller déjà câblé
export function createProductsRouter({ productsController }) {
  const router = Router();
  router.get("/", productsController.list.bind(productsController));
  return router;
}

export default createProductsRouter;
