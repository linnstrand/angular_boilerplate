import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { NotificationsComponent } from '../notifications/notification-handler/notifications.component';

@NgModule({
	imports: [ CommonModule, RouterModule, FormsModule, ReactiveFormsModule ],
	declarations: [ SearchComponent, HighlightPipe, NotificationsComponent ],
	exports: [ CommonModule, FormsModule, ReactiveFormsModule, SearchComponent, NotificationsComponent ]
})
export class SharedModule {}
