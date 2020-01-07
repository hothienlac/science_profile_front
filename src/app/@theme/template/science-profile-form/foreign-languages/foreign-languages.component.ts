import { Component, OnInit, OnDestroy } from '@angular/core';
import { IForeignLanguage, IScienceProfile } from '@ngx/models';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

import { LocalDataSource } from 'ng2-smart-table';
import { ConfirmService } from '../../util/confirm.service';

@Component({
  selector: 'ngx-foreign-languages',
  templateUrl: './foreign-languages.component.html',
  styleUrls: ['./foreign-languages.component.scss'],
})
export class ForeignLanguagesComponent implements OnInit, OnDestroy {

  settings = {
    actions: false,
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
      language: {
        title: 'Language',
        type: 'string',
      },
      reading: {
        title: 'Reading',
        type: 'string',
      },
      writing: {
        title: 'Writing',
        type: 'string',
      },
      speaking: {
        title: 'Speaking',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  ForeignLanguages: Subscription;
  foreignLanguages: IForeignLanguage[];
  disabled: boolean = true;

  constructor(
    public dataService: DataService,
    public confirmService: ConfirmService,
  ) {
    this.foreignLanguages = [];
    this.ForeignLanguages = this.dataService.data$.subscribe((data: IScienceProfile) => {
      if (data.personalInformation) {
        this.foreignLanguages = data.foreignLanguages;
      } else this.foreignLanguages = [];
      this.source.load(this.foreignLanguages);
    });
    dataService.disable$.subscribe((disable) => {
      this.disabled = disable;
      this.settings.actions = this.disabled;
    });
  }

  ngOnInit() {
  }

  onDeleteConfirm(event): void {
    this.confirmService.confirm('Are you sure to Delete?').subscribe((confirm) => {
      if (confirm)
        event.confirm.resolve();
      else
        event.confirm.reject();
    });
  }
  ngOnDestroy(): void {
    this.ForeignLanguages.unsubscribe();
  }

}
