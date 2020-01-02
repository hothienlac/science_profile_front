import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ICareer, IScienceProfile } from '@ngx/models';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { ConfirmService } from '../../util/confirm.service';

@Component({
  selector: 'ngx-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit, OnDestroy {

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
    public dataService: DataService,
    public confirmService: ConfirmService,
  ) {
    this.career = [];
    this.Career = this.dataService.data$.subscribe((data: IScienceProfile) => {
      if (data.career) {
        this.career = data.career;
        console.log('from FL', this.career);
      }
      else
        this.career = [];
      this.source.load(this.career)
    });
    dataService.disable$.subscribe((disable) => {
      this.disabled = disable;
    });
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
    });

  }

  onEditConfirm(event): void {

    this.confirmService.confirm().subscribe((confirm) => {
      console.log(confirm);
      if (confirm)
        event.confirm.resolve();
      else
        event.confirm.reject();
    })
  }

  ngOnDestroy(): void {
    this.Career.unsubscribe();
  }

  save(): Promise<ICareer> {
    return this.source.getAll();
  }

}
