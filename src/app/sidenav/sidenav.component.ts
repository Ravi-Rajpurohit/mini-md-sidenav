import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sidenavWidth = 4.5;

  constructor() { }

  ngOnInit() {
  }

  increase(){
    this.sidenavWidth = 15;
  }
  decrease(){
    this.sidenavWidth = 4.5;
  }
}
