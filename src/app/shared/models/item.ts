export class Item {
  id: string;
  name: string;
  description?: string;
  hours?: number;
  readonly typeName: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.typeName = 'Item';
  }
}
