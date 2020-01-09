import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '@ngx/models';

import { ConfirmService } from '../../../@theme/template/util/confirm.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'ngx-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent {

  settings = {
    actions: false,
    hideSubHeader: false,
    columns: {
      userName: {
        title: 'Username',
        type: 'string',
      },
      school: {
        title: 'School',
        type: 'string',
      },
      major: {
        title: 'Major',
        type: 'string',
      },
      degree: {
        title: 'Degree',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmService: ConfirmService,
    private usersService: UsersService,
    ) {
    const data: IUser[] = usersService.getAllUser();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    this.confirmService.confirm('Are you sure to Delete?').subscribe((confirm) => {
      if (confirm)
        event.confirm.resolve();
      else
        event.confirm.reject();
    });
  }

  rowSelect(event: { data: { id: any; }; }) {
    this.router.navigate([`../detail/${event.data.id}`], {relativeTo: this.activatedRoute});
  }

  newUser() {
    this.router.navigate(['../new'], {relativeTo: this.activatedRoute});
  }

}
