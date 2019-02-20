import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../configs/app.config';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	collapse = 'closed';
	isAdmin: boolean;
	userId: string;
	constructor(private appConfig: AppConfig) {}

	toggleCollapse() {
		this.collapse = this.collapse === 'open' ? 'closed' : 'open';
	}

	ngOnInit() {
		this.isAdmin = this.appConfig && this.appConfig.settings && this.appConfig.settings.isAdmin;
		this.userId = this.appConfig && this.appConfig.settings && this.appConfig.settings.userId;
	}
}
