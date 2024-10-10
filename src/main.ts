import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {Routes} from "@angular/router";
import {ProductListComponent} from "./app/product-list/product-list.component";
import {ProductListItemComponent} from "./app/product-list-item/product-list-item.component";

const routes: Routes = [

]

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
