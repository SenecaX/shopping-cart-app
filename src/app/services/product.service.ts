import { Injectable } from "@angular/core";

import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products: Product[] = [
    new Product(1, "Product 1", "This is a desc", 100),
    new Product(2, "Product 1", "This is a desc", 100),
    new Product(3, "Product 1", "This is a desc", 100),
    new Product(4, "Product 1", "This is a desc", 100),
    new Product(5, "Product 1", "This is a desc", 100),
    new Product(6, "Product 1", "This is a desc", 100),
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
