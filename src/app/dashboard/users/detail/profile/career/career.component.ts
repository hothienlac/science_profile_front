import { Component, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';
import { ProfileService } from '../profile.service';
import { IScienceProfile, ICareer } from '@ngx/models';
import { CareerDialogComponent } from './career-dialog/career-dialog.component';

@Component({
  selector: 'ngx-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnDestroy {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: false,
    columns: {
      time: {
        title: 'Time',
        type: 'string',
      },
      organization: {
        title: 'Organization',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      position: {
        title: 'Position',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  Career: Subscription;
  career: ICareer[];
  Disabled: Subscription;
  disabled: boolean = true;

  constructor(
    public profileService: ProfileService,
    public confirmService: ConfirmService,
  ) {
    this.Career = this.profileService.data$.subscribe((data: IScienceProfile) => {
      if (data.career) {
        this.career = data.career;
      } else {
        this.career = [];
      }
      this.source.load(this.career);
    });
    this.Disabled = profileService.disable$.subscribe((disable) => {
      this.disabled = !disable;
    });
  }

  ngOnDestroy(): void {
    this.Career.unsubscribe();
    this.Disabled.unsubscribe();
  }

  onRowSelect($event) {
    const index = this.career.indexOf($event.data);
    this.profileService.toggleDialogue(CareerDialogComponent,
      {data: $event.data, disable: this.disabled, del: !this.disabled})
      .subscribe((data) => {
        if (data === null) return;
        if (data === false) {
          this.career.splice(index, 1);
          this.source.load(this.career);
          return;
        }
        this.career[index] = data;
        this.source.load(this.career);
      });
  }

  onNew() {
    this.profileService.toggleDialogue(CareerDialogComponent,
      {data: {}, disable: false, del: false})
      .subscribe((data) => {
        if (data === null) return;
        this.career.unshift(data);
        this.source.load(this.career);
      });
  }

}
