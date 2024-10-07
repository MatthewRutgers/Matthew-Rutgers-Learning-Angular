import { Component } from '@angular/core';
import {Product} from "../models/product";
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductListItemComponent,
    NgForOf,
    NgStyle
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: Product[] = [
    {id: 1, itemName: 'Paper Paperclip', madeFrom: 'Paper', desc: 'A paper clip from paper for paper to hold paper', inStock: true, imgPath: "/assets/Cat03.jpg"},
    {id: 2, itemName: 'Paperless Bread Tag', madeFrom: 'Paperless Cardboard (Plastic)', desc: '1 turtle at a time', inStock: true , imgPath: "/assets/paperlessbreadtag.png"},
    {id: 3, itemName: 'Transparent Keychain', madeFrom: 'Paper Bags', desc: 'No hazards around, only a vision of Jesus', inStock: true, imgPath: "/assets/transparentkeychain.png"},
    {id: 4, itemName: 'Paper Shoelace', madeFrom: 'Paper', desc: 'Too reliable, do not pull', inStock: false, imgPath: "/assets/papershoelace.png"},
    {id: 5, itemName: 'Bouncy Knife', madeFrom: 'Uranium', desc: 'Wear safety glasses and a jock', inStock: true, imgPath: "/assets/bouncyknife.png"},
    {id: 6, itemName: 'Waiting for creativity', madeFrom: 'Asbestos', desc: 'I hope its good', inStock: false, imgPath: "/assets/thinking.png"}
  ];
}
