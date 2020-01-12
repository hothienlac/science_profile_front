import { Component, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { IScienceProfile, IEducation } from '@ngx/models';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';
import { ProfileService } from '../profile.service';
import { EducationDialogComponent } from './education-dialog/education-dialog.component';

@Component({
  selector: 'ngx-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnDestroy {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmEdit: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    hideSubHeader: false,
    columns: {
      time: {
        title: 'Time',
        type: 'string',
      },
      university: {
        title: 'University',
        type: 'string',
      },
      major: {
        title: 'Mahor',
        type: 'string',
      },
      degree: {
        title: 'Degree',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  Education: Subscription;
  education: IEducation[];
  Disabled: Subscription;
  disabled: boolean = true;

  constructor(
    public profileService: ProfileService,
    public confirmService: ConfirmService,
  ) {
    this.Education = this.profileService.data$.subscribe((data: IScienceProfile) => {
      if (data.education) {
        this.education = data.education;
      } else {
        this.education = [];
      }
      this.source.load(this.education);
    });
    this.Disabled = profileService.disable$.subscribe((disable) => {
      this.disabled = !disable;
    });
  }

  ngOnDestroy(): void {
    this.Education.unsubscribe();
    this.Disabled.unsubscribe();
  }

  onRowSelect($event) {
    const index = this.education.indexOf($event.data);
    this.profileService.toggleDialogue(EducationDialogComponent,
      {data: $event.data, disable: this.disabled, del: !this.disabled})
      .subscribe((data) => {
        if (data === null) return;
        if (data === false) {
          this.education.splice(index, 1);
          this.source.load(this.education);
          return;
        }
        this.education[index] = data;
        this.source.load(this.education);
      });
  }

  onNew() {
    this.profileService.toggleDialogue(EducationDialogComponent,
      {data: {}, disable: false, del: false})
      .subscribe((data) => {
        if (data === null) return;
        this.education.unshift(data);
        this.source.load(this.education);
      });
  }

}
