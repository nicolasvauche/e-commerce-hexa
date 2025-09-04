

export class ListProductsUseCase {
  //injection de dépendance
    constructor(ProductsRepository) {
      this.ProductsRepository= ProductsRepository;
    }
    
    async execute() {
      return this.ProductsRepository.findAll();
    }
  }

  