export class ProductsController {
  constructor(listProductsUseCase) {
    this.listProductsUseCase = listProductsUseCase;
  }

  async list(req, res) {
    try {
      const products = await this.listProductsUseCase.execute();
      res.status(200).json({ items: products });
    } catch (e) {
      res.status(500).json({ error: "Unable to list products" });
    }
  }
}
