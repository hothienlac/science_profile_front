import { Injectable, Component, Type } from '@angular/core';
import { IScienceProfile } from '@ngx/models';
import { Subject, Observable } from 'rxjs';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';
import { NbDialogService } from '@nebular/theme';

@Injectable()
export class ProfileService {

  data: IScienceProfile = {};
  disable: boolean = true;

  dataSource = new Subject<IScienceProfile>();
  disableSource = new Subject<boolean>();

  data$ = this.dataSource.asObservable();
  disable$ = this.disableSource.asObservable();

  setData(data: IScienceProfile) {
    this.dataSource.next(data);
  }

  setStatus(disable: boolean) {
    this.disableSource.next(disable);
  }

  getStatus(): boolean {
    return this.disable;
  }

  getData(): IScienceProfile {
    return this.data;
  }

  async retreiveData(): Promise<IScienceProfile> {
    throw new Error('Method not implemented.');
  }

  constructor(
    public confirmService: ConfirmService,
    public dialogService: NbDialogService,
  ) {
    this.data$.subscribe((data) => {
      this.data = data;
    });
    this.disable$.subscribe((disable) => {
      this.disable = disable;
    });
  }

  toggleDialogue(component, data: any): Observable<any> {
    return new Observable((observer) => {
      this.dialogService.open(component, {
          closeOnBackdropClick: false,
          closeOnEsc: false,
          context: data,
        })
        .onClose.subscribe((confirm) => {
          observer.next(confirm);
          observer.complete();
          return {unsubscribe() {}};
      });
    });
  }

}
