import { ListProductsUseCase } from "../../application/ListProducts.js";  


export class ProductsController {
  constructor(ListProductsUseCase) {
    this.ListProductsUseCase = ListProductsUseCase;
  }
  

  async list(req, res, next) {
    const products = await this.ListProductsUseCase.execute();
res.send(products);
  }
}

  