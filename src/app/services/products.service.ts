import { Injectable } from '@angular/core';
import {productList} from "../data/mock-content";
import {Product} from "../models/product";
import {Observable, of} from "rxjs";
import {ProductListComponent} from "../product-list/product-list.component";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Create copy of product data
  private products: Product[] = productList;
  constructor() {
  }
  // Create CRUD
  getStudents(): Observable<Product[]> {
    return of(productList);
  }
  addProduct(newProduct:Product) : Observable<Product[]> {
    this.products.push(newProduct)
    return of(this.products);
  }
  updateProduct(updatedProduct: Product) : Observable<Product[]> {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
    return of(this.products);
  }
  deleteProduct(productId: number) : Observable<Product[]> {
    this.products = this.products.filter(product => product.id !== productId);
    return of(this.products);
  }
  getProductById(productId: number) : Observable<Product | undefined> {
    const product = this.products.find(product => product.id === productId);
    return of(product);
  }

}
