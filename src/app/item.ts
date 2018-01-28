export class Item {
  public id: number;
  public name: string;
  public price: number;
  public selected: Boolean;

  constructor (obj) {
    this.id    = obj.id    || null;
    this.name  = obj.name  || '';
    this.price = obj.price || null;
    this.selected = obj.selected || false;
  }
}
