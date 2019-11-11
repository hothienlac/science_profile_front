import { Component, OnInit, Input } from '@angular/core';
import { IEducation, IScienceProfile } from '@ngx/models';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { ConfirmService } from '../../util/confirm.service';

@Component({
  selector: 'ngx-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {


  settings = {
    actions: this.dataService.active,
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
  disabled: boolean = true;

  constructor(
    public dataService: DataService,
    public confirmService: ConfirmService,
  ) {
    this.education = [];
    this.Education = this.dataService.data$.subscribe((data: IScienceProfile) => {
      if (data.education) {
        this.education = data.education
        console.log('from E', this.education)
      }
      else
        this.education = [];
      this.source.load(this.education)
    });
    dataService.disable$.subscribe((disable: boolean) => {
      this.disabled = disable;
      if (disable == true)
        this.settings.actions = this.dataService.notActive
      else
        this.settings.actions = this.dataService.active
      console.log(this.settings.actions)
    })
  }

  ngOnInit() {
  }

  onDeleteConfirm(event): void {

    this.confirmService.confirm().subscribe((confirm) => {
      console.log(confirm);
      if (confirm)
        event.confirm.resolve();
      else
        event.confirm.reject();
    })
  }

  ngOnDestroy(): void {
    this.Education.unsubscribe();
  }

}
