import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './menu';

@Component({
  selector: 'ngx-dashboard',
  template: `
  <ngx-one-column-layout>
    <nb-menu [items]="menu"></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
`,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
