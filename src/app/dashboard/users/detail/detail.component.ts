import { Component } from '@angular/core';
import { IScienceProfile } from '@ngx/models';
import { UsersService } from '../users.service';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  scienceProfile: IScienceProfile;

  constructor(
    private usersService: UsersService,
  ) {
    this.scienceProfile = this.usersService.getScienceProfile();
  }

}
