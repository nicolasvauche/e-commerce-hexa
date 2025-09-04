export class ListProductsUseCase {
  constructor(productsRepository) {
    this.productsRepository = productsRepository; // <- port
  }

  async execute() {
    return await this.productsRepository.findAll();
  }
}
