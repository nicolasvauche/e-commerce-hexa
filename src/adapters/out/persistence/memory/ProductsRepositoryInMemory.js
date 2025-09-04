import { ProductsRepository } from "../../../../ports/out/ProductsRepository.js";
import { Product } from "../../../../domain/Product.js";

const DEFAULT_SEED = [
  new Product({ id: 1, name: "Guitare", price: 199.99 }),
  new Product({ id: 2, name: "Basse", price: 149.99 }),
  new Product({ id: 3, name: "Clavier", price: 229.0 }),
];

export class ProductsRepositoryInMemory extends ProductsRepository {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.items = seed.map(
      (p) => new Product({ id: p.id, name: p.name, price: p.price })
    );
  }

  async findAll() {
    return this.items.map(
      (p) => new Product({ id: p.id, name: p.name, price: p.price })
    );
  }
}
