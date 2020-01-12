import { Component, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { IEducation, IScienceProfile } from '@ngx/models';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';
import { ProfileService } from '../profile.service';

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
      console.log('asdasdsd' + disable);
      const newSettings = {
        actions: {
          add: disable,
          edit: disable,
          delete: disable,
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
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
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
      this.settings = Object.assign({}, newSettings );
    });
  }

  async update() {
    const result = this.profileService.getData();
    result.education = await this.source.getAll();
    this.profileService.dataSource
      .next(result);
  }

  ngOnDestroy(): void {
    this.Education.unsubscribe();
    this.Disabled.unsubscribe();
  }

}
