import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../shared/models/item';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit, AfterViewChecked {
  items: Item[];
  item: Item;
  customInput: Subject<string> = new Subject();
  groupFreeText: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(() => {});
  }

  ngAfterViewChecked() {
    // this.viewService.setFocusOn();
  }

  itemChanged(event) {
    this.customInput.next(event);
  }

  onChange() {}

  cancelItem() {
    this.item = undefined;
  }

  onSubmit() {}
}
