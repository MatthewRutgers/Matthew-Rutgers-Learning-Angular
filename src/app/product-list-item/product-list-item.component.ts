import {Component, Input} from '@angular/core';
import {Product} from "../models/product";
import {NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input() product?: Product;
  @Input() backgroundColour?: string;
}
