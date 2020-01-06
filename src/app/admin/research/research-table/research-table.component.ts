import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '@ngx/models';
import { DefaultDataService } from '../../../root-service/default-data.service';

@Component({
  selector: 'ngx-research-table',
  templateUrl: './research-table.component.html',
  styleUrls: ['./research-table.component.scss'],
})
export class ResearchTableComponent {

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
    private service: SmartTableData,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private defaultDataService: DefaultDataService,
    ) {
    const data : IUser[] = defaultDataService.getUsers();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  rowSelect(event: { data: { id: any; }; }) {
    this.router.navigate([`./detail/${event.data.id}`], {relativeTo: this.activatedRoute});
  }
  
  newUser(){
    this.router.navigate(['./new-user'], {relativeTo: this.activatedRoute});
  }

}
