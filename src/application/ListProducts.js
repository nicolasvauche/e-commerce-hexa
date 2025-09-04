export class ListProductsUseCase {
  //injection de dépendance
    constructor() {
      this.products=[{ id: 1, name: "Product A", price: 100 },
        { id: 2, name: "Product B", price: 150 },
        { id: 3, name: "Product C", price: 200 },]
    }
    
    async execute() {
      return this.products;
    }
  }

  