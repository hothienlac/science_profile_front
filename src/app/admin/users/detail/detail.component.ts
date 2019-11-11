import { Component, OnInit } from '@angular/core';
import { DefaultDataService } from '../../../@core__/services/default-data.service';
import { IScienceProfile } from '@ngx/models';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  scienceProfile: IScienceProfile;

  constructor(
    private defaultDataService: DefaultDataService
  ) {
    this.scienceProfile = this.defaultDataService.getScienceProfile();
    
    console.log(this.scienceProfile, 'from detail');
  }


  ngOnInit() {
  }


  onSave(data) {
  }

}
