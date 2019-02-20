import { Injectable } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemService {
	item: Item;
	subjItem = new BehaviorSubject<Item>(this.item);
}
