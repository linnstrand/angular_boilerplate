import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Items } from './items';
import { Item } from 'src/app/shared/models/item';
import { ItemService } from './items.service';

class ItemsDTO {}

@Component({
	selector: 'app-items',
	template: ''
})
export class ItemsComponent implements OnInit {
	items: Items;
	date: Date;

	// Component status variables
	editActive = false;
	showItemForm: boolean;
	showSearch: boolean;
	checkboxControls: FormArray;

	itemsForm: FormGroup;
	item: any;

	constructor(private itemService: ItemService, private titleService: Title, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.paramMap.subscribe(pmap => {
			const date = pmap.get('date');
			this.date = new Date(date) || new Date();
		});
		this.route.data.subscribe((data: { items: ItemsDTO[] }) => {
			this.load(data.items);
		});
	}

	load(itemsrows: ItemsDTO[]) {}

	cancelItem() {
		this.item = undefined;
	}

	createItem(item?: Item) {}

	editItem(itemsRow: ItemsDTO) {}

	openSearch() {
		this.disableEdit();
		this.showSearch = true;
	}

	closeSearch(result: Item) {
		this.showSearch = false;
		if (!result) {
			return;
		}
	}

	toggleEdit() {
		this.editActive = this.editActive ? this.disableEdit() : !this.editActive;
	}

	disableEdit() {
		this.editActive = false;
		if (this.checkboxControls) {
			this.checkboxControls.reset();
		}
		return false;
	}
}
