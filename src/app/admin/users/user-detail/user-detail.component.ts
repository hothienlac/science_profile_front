import { Component, OnInit } from '@angular/core';
import { DefaultDataService } from '../../../root-service/default-data.service';
import { IScienceProfile } from '@ngx/models';

@Component({
  selector: 'ngx-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  scienceProfile: IScienceProfile;

  constructor(
    private defaultDataService: DefaultDataService,
  ) {
    this.scienceProfile = this.defaultDataService.getScienceProfile();

    console.log(this.scienceProfile, 'from detail');
  }


  ngOnInit() {
  }


  onSave(data) {
  }

}
