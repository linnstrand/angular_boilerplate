import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Item } from '../../models/item';
import { HelperService } from 'src/app/core/services/helper.service';

@Component({
  selector: 'app-search',
  template: ''
})
export class SearchComponent implements OnInit, AfterViewInit {
  @Input() date: Date;
  items: Item[];
  private allItems: Item[];
  freetext = '';
  freeTextSearch = new FormControl();
  @Output() close = new EventEmitter<any>();

  constructor(private helperService: HelperService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.helperService.setFocusOn('search');

    this.freeTextSearch.valueChanges.pipe(debounceTime(100)).subscribe((freetext: string) => {
      this.freetext = freetext;
      const search = freetext.toLowerCase();
      this.items = this.allItems.filter((a: Item) => {
        return (
          (a.name && a.name.toLowerCase().includes(search)) ||
          (a.description && a.description.toLowerCase().includes(search))
        );
      });
    });
  }

  onClose(result: any): void {
    this.close.emit(result);
  }
}
