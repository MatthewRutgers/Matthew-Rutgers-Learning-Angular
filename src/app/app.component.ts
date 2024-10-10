import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {Product} from "./models/product";
import {ProductListComponent} from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, ProductListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Matthew-Rutgers-Still-Learning-Angular';
  myName = "Matthew Rutgers";
  myAge = 83;

  productList: Product[] = [
    {id: 1, itemName: 'Paper Paperclip', madeFrom: 'Paper', desc: 'A paper clip from paper for paper to hold paper', inStock: true},
    {id: 2, itemName: 'Paperless Bread Tag', madeFrom: 'Paperless Cardboard (Plastic)', desc: '1 turtle at a time', inStock: true },
    {id: 3, itemName: 'Transparent Keychain', madeFrom: 'Paper Bags', desc: 'No hazards around, only a vision of Jesus', inStock: true},
    {id: 4, itemName: 'Paper Shoelace', madeFrom: 'Paper', desc: 'Too reliable, do not pull', inStock: false},
    {id: 5, itemName: 'Bouncy Knife', madeFrom: 'Uranium', desc: 'Wear safety glasses and a jock', inStock: true},
    {id: 6, itemName: 'Waiting for creativity', madeFrom: 'Asbestos', desc: 'I hope its good', inStock: false}
  ];


  protected readonly name = name;
}
