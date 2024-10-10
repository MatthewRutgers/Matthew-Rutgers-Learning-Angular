import { Component } from '@angular/core';
import {Product} from "../models/product";
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductListItemComponent,
    NgForOf,
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: Product[] = [];
  constructor(private productService: ProductsService ) {

  }
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => this.productList = data,
      error:err => console.log("Error fetching products", err),
      complete:() => console.log("Student data fetch completed")
    })
  }
  selectedProduct?: Product;
  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}
