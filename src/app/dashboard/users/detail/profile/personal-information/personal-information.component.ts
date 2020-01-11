import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPersonalInformation, IScienceProfile } from '@ngx/models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'ngx-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnDestroy {

  PersonalInformation: Subscription;
  personalInformation: IPersonalInformation;
  disabled: boolean = true;

  constructor(
    public profileService: ProfileService,
  ) {
    this.personalInformation = {};
    this.PersonalInformation = this.profileService.data$.subscribe((data: IScienceProfile) => {
      if (data.personalInformation) {
        this.personalInformation = data.personalInformation;
      } else
        this.personalInformation = {};
    });
    profileService.disable$.subscribe((disable) => {
      this.disabled = !disable;
    });
  }

  personalInformation__(): string {
    return JSON.stringify(this.personalInformation);
  }

  ngOnDestroy(): void {
    this.PersonalInformation.unsubscribe();
  }

}
