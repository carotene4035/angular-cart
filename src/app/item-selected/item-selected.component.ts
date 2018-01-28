import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.css']
})
export class ItemSelectedComponent implements OnInit, OnChanges {
  @Input() selectedItems;

  private selectedItemsCnt;
  private previousSelectedItemsCnt;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('item-selected');
    console.log(changes);
    const previousSelectedItems = changes.selectedItems.previousValue;
    if (previousSelectedItems !== undefined) {
      this.previousSelectedItemsCnt = changes.selectedItems.previousValue.length;
    } else {
      this.previousSelectedItemsCnt = 0;
    }
    this.selectedItemsCnt = this.selectedItems.length;
  }

  ngOnInit() {

  }

}
