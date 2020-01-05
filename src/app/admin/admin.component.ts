import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS, MENU_ITEMS_ADMIN } from './admin-menu';

@Component({
  selector: 'ngx-admin',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  menu = MENU_ITEMS_ADMIN;

  constructor() { }

  ngOnInit() {
  }

}
