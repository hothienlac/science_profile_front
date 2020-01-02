import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IPersonalInformation, IScienceProfile } from '@ngx/models';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit, OnDestroy {

  PersonalInformation: Subscription;
  personalInformation: IPersonalInformation;
  disabled: boolean = true;

  constructor(
    public dataService: DataService,
  ) {
    this.personalInformation = {};
    this.PersonalInformation = this.dataService.data$.subscribe((data: IScienceProfile) => {
      if (data.personalInformation) {
        this.personalInformation = data.personalInformation;
        console.log('from PI', this.personalInformation);
      } else
        this.personalInformation = {};
    });
    dataService.disable$.subscribe((disable) => {
      this.disabled = !disable;
    });
  }

  personalInformation__(): string {
    return JSON.stringify(this.personalInformation);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.PersonalInformation.unsubscribe();
  }

}
