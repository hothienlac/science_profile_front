import { Component, OnInit } from '@angular/core';
import { IScienceProfile } from '@ngx/models';
import { UsersService } from '../users.service';
import { ProfileService } from './profile/profile.service';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {

  public editing: boolean = false;
  private backup: IScienceProfile;

  constructor(
    private usersService: UsersService,
    private profileService: ProfileService,
    private confirmService: ConfirmService,
  ) {
    this.backup = this.usersService.getScienceProfile('');
    this.profileService.setData(this.backup);
  }

  onCancel() {
    this.confirmService.confirm('All changes will be discarded. Are you sure to CANCEL?')
      .subscribe((confirm) => {
        if (confirm) {
          this.editing = false;
          this.profileService.setData(this.backup);
          this.profileService.setStatus(false);
        }
      });
  }

  onEdit() {
    this.editing = true;
    this.profileService.setStatus(true);
  }

  async onSave($event) {
    this.confirmService.confirm('All changes will be discarded. Are you sure to CANCEL?')
      .subscribe((confirm) => {
        if (confirm) {
          console.log($event);
          this.editing = false;
          this.profileService.setStatus(false);
          this.usersService.updateScienceProfile(this.profileService.getData());
        }
      });
  }

}
