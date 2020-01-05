import { Injectable } from '@angular/core';
import { IScienceProfile } from '@ngx/models';

import { Subject, Subscription } from 'rxjs';
import { ConfirmService } from '../util/confirm.service';

@Injectable()
export class DataService {

  active = {
    add: true,
    edit: true,
    delete: true,
  };

  notActive = {
    add: false,
    edit: false,
    delete: false,
  };

  data: IScienceProfile = {};

  private dataSource = new Subject<IScienceProfile>();
  private disableSource = new Subject<boolean>();
  private onSaved = new Subject<IScienceProfile>();

  data$ = this.dataSource.asObservable();
  disable$ = this.disableSource.asObservable();
  onSaved$ = this.onSaved.asObservable();

  setData(data: IScienceProfile) {
    this.dataSource.next(data);
  }

  setStatus(disable: boolean) {
    this.disableSource.next(disable);
  }

  currentData(): IScienceProfile {
    return this.data;
  }

  constructor(
    public confirmService: ConfirmService,
  ) {
    this.data$.subscribe((data) => {
      this.data = data;
    });
  }

}
