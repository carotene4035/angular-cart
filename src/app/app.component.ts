import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Data } from './data';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    /** 自信をサービスに渡す */
    // これで、サービスがappコンポーネントのデータをいじれるようになる */
    // つまり、データをstoreしているのはapp component
    // 私の場合はサービスがdataを保持してしまっていたので、ややこしいことになっていた
    this.appService.init(this);
  }

  public items: Array<Item> = [
    new Item({id: 1, name: 'name1', price: 100, selected: false}),
    new Item({id: 2, name: 'name2', price: 200, selected: false}),
    new Item({id: 3, name: 'name3', price: 300, selected: false}),
    new Item({id: 4, name: 'name4', price: 300, selected: false}),
    new Item({id: 5, name: 'name5', price: 300, selected: false}),
    new Item({id: 6, name: 'name6', price: 300, selected: false}),
    new Item({id: 7, name: 'name7', price: 300, selected: false}),
    new Item({id: 8, name: 'name8', price: 300, selected: false}),
    new Item({id: 9, name: 'name9', price: 300, selected: false}),
    new Item({id: 10, name: 'name10', price: 300, selected: false}),
  ];

  public selectedItems: Array<Item> = [
  ];

}

