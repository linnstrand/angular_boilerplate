import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from '../../configs/app.config';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
	userId: any;

	constructor(private titleService: Title, private appConfig: AppConfig) {}

	ngOnInit() {
		this.getSystemInfo();
		this.titleService.setTitle('Name: Inställningar');
	}
	getSystemInfo() {
		this.userId = this.appConfig.settings.userId;
	}
}
