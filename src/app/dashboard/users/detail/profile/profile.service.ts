import { Injectable } from '@angular/core';
import { IScienceProfile } from '@ngx/models';
import { Subject } from 'rxjs';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';

@Injectable()
export class ProfileService {

  data: IScienceProfile = {};

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

  getData(): IScienceProfile {
    return this.data;
  }

  async retreiveData(): Promise<IScienceProfile> {
    throw new Error('Method not implemented.');
  }

  constructor(
    public confirmService: ConfirmService,
  ) {
    this.data$.subscribe((data) => {
      this.data = data;
    });
  }

}
