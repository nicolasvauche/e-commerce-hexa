export async function list(req, res, next) {
  try {
    const products = [
      { id: 1, name: "Product A", price: 100 },
      { id: 2, name: "Product B", price: 150 },
      { id: 3, name: "Product C", price: 200 },
    ];
    res.json(products);
  } catch (e) {
    next(e);
  }
}
