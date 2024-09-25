import { Component } from '@angular/core';
import {Product} from "../models/product";
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductListItemComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: Product[] = [
    {id: 1, itemName: 'Paper Paperclip', madeFrom: 'Paper', desc: 'A paper clip from paper for paper to hold paper', inStock: true},
    {id: 2, itemName: 'Paperless Bread Tag', madeFrom: 'Paperless Cardboard (Plastic)', desc: '1 turtle at a time', inStock: true },
    {id: 3, itemName: 'Transparent Keychain', madeFrom: 'Paper Bags', desc: 'No hazards around, only a vision of Jesus', inStock: true},
    {id: 4, itemName: 'Paper Shoelace', madeFrom: 'Paper', desc: 'Too reliable, do not pull', inStock: false},
    {id: 5, itemName: 'Bouncy Knife', madeFrom: 'Uranium', desc: 'Wear safety glasses and a jock', inStock: true},
    {id: 6, itemName: 'Waiting for creativity', madeFrom: 'Asbestos', desc: 'I hope its good', inStock: false}
  ];
}
