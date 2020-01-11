import { Component, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';
import { ProfileService } from '../profile.service';
import { IScienceProfile, ICareer } from '@ngx/models';

@Component({
  selector: 'ngx-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnDestroy {

  settings = {
    actions: {
      add: true,
      edit: true,
      delete: true,
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
  disabled: boolean = true;

  constructor(
    public profileService: ProfileService,
    public confirmService: ConfirmService,
  ) {
    this.career = [];
    this.Career = this.profileService.data$.subscribe((data: IScienceProfile) => {
      if (data.career) {
        this.career = data.career;
      } else this.career = [];
      this.source.load(this.career);
    });
    profileService.disable$.subscribe((disable) => {
      this.disabled = disable;
    });
  }

  async update() {
    const result = this.profileService.getData();
    result.career = await this.source.getAll();
    this.profileService.dataSource
      .next(result);
  }

  ngOnDestroy(): void {
    this.Career.unsubscribe();
  }

}
