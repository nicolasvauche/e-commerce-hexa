import { Product } from "../../../../domain/Product.js";
import { ProductsRepository } from "../../../../ports/out/ProductsRepository.js";

export class ProductRepositorySqlite extends ProductsRepository {
  constructor(db) {
    super();
    this.db = db;
    this.qList = db.prepare(
      "SELECT id, name, price FROM products ORDER BY id ASC"
    );
  }

  async findAll() {
    const rows = this.qList.all();
    return rows.map(
      (r) =>
        new Product({
          id: r.id,
          name: r.name,
          price: r.price,
        })
    );
  }
}
