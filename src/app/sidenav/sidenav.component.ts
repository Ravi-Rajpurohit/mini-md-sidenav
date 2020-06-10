import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
	sidenavWidth = 4;

	constructor(private router: Router) {}

	ngOnInit() {}

	increase() {
		this.sidenavWidth = 15;
		console.log('increase sidenav width');
	}
	decrease() {
		this.sidenavWidth = 4;
		console.log('decrease sidenav width');
	}
}
