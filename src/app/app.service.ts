import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Item } from './item';

@Injectable()
export class AppService {

  componentRef: AppComponent;

  constructor() { }

  /** 親コンポーネントを取得する */
  init(ref) {
    this.componentRef = ref;
    console.log(ref);
  }

  updateItems(itemId) {
    console.log('itemリストを更新するよ');

    let updateItems = [];
    let selectdItems = [];

    updateItems =
      this.componentRef.items.map(
        (item) => {
          /** 選ばれたことにする */
          if (item.id === itemId) {
            item.selected = !item.selected;
          }

          /** 選ばれたitemを配列に詰める */
          if (item.selected === true) {
            selectdItems.push(item);
          }
          return item;
        }
    );
    this.componentRef.items = updateItems;
    this.componentRef.selectedItems = selectdItems;
  }
}
