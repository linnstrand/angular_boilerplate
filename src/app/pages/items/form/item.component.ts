import { Component, AfterViewChecked, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { totalTimeExceededValidator, minTimeValidator } from 'src/app/shared/directives/time-validation.directive';
import { FormError } from 'src/app/errors/errors';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/shared/models/item';

@Component({
	selector: 'app-item',
	template: ''
})
export class ItemComponent implements AfterViewChecked, OnInit, OnDestroy {
	// Parent inputs
	// Emitters
	@Output() done = new EventEmitter();
	@Output() cancel = new EventEmitter<boolean>();
	item: any; // The item under editing
	totalHours = 0;

	// Component status variables
	isValid: boolean;
	original: Object;
	showSearch: boolean;

	// Form controls
	itemForm: FormGroup;
	itemSelect: FormControl;
	groupSelect: FormControl;
	timeSelect: FormControl;
	itemError: boolean;

	itemSubscription: Subscription;

	formError: boolean; // If there is a failure to create the form
	tempGroup: any; // Decides if selected group should be saved
	maxAllowed: number;
	itemService: any;

	constructor() {}

	//
	// Component Interface implementation
	//
	ngOnInit() {}

	ngAfterViewChecked() {}

	ngOnDestroy() {}

	//
	// Form Setup
	//
	editItem(): any {}

	setitem(item: Item): any {}

	watchData() {
		this.itemSubscription = this.itemService.subjName.subscribe((item: Item) => {
			this.item = item;
			// Check that total hours are correct
			if (!this.itemForm) {
				return;
			}
			// update values
			this.itemForm.markAsPristine();
		});
	}

	createFormControls(group: string = '') {
		try {
			this.timeSelect = new FormControl(this.item.time, Validators.required);
			this.groupSelect = new FormControl(group || '1' || '2');
			this.itemSelect = new FormControl(this.item.id || '', Validators.required);

			this.itemForm = new FormGroup(
				{
					time: this.timeSelect,
					group: this.groupSelect,
					item: this.itemSelect
				},
				{ validators: [ totalTimeExceededValidator(this.maxAllowed, 'minutes', 'hours'), minTimeValidator('minutes', 'hours') ] }
			);
		} catch (error) {
			this.formError = true;
			throw new FormError(error);
		}
		this.setFormChangeWatchers();
	}

	setFormChangeWatchers() {}

	//
	// Event Methods
	//
	onSubmit(): void {}

	formToModel(): any {}

	onCancel() {}

	delete(item: any) {}
}
