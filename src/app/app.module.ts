import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemSelectedComponent } from './item-selected/item-selected.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemSelectedComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
