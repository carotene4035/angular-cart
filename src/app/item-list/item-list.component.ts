import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnChanges {
  @Input() items;

  constructor(private appService: AppService) {}

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }

  selected(itemId) {
    /** サービスにitemの変更を通知する */
    this.appService.updateItems(itemId);
  }
}
