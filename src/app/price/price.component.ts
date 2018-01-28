import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Input() selectedItems;

  private price;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    this.price = 0;
    this.selectedItems.forEach(function(item, index, items) {
      this.price = this.price + item.price;
    }, this);
    console.log(this.price);
  }
}
