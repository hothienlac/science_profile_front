import { Component, OnInit, OnDestroy } from '@angular/core';
import { MENU_ITEMS, MENU_ITEMS_ADMIN } from './menu';
import { AuthenticateService } from '../authenticate';
import { StorageService } from '../root-service/storage.service';
import { NbMenuItem } from '@nebular/theme';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ERoles } from '@ngx/models';
import { first, takeUntil } from 'rxjs/operators';

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
export class DashboardComponent implements OnInit, OnDestroy {

  private _ngDestroy$ = new Subject<void>();
  isAdmin: boolean;

  public menu = MENU_ITEMS;

  constructor(
    private authenticateService: AuthenticateService,
  ) {}

  async ngOnInit() {
    await this.checkForAdmin();
    if (this.isAdmin) {
      this.menu = MENU_ITEMS_ADMIN;
    } else {
      this.menu = MENU_ITEMS;
    }
  }

  async checkForAdmin() {
    this.isAdmin = await this.authenticateService
      .hasRole([ERoles.ADMIN])
      .pipe(first())
      .pipe(takeUntil(this._ngDestroy$))
      .toPromise();
  }

  ngOnDestroy() {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }

}
