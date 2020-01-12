import { Component, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { IScienceProfile, IResearchInterest } from '@ngx/models';
import { ProfileService } from '../../profile.service';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';
import { ResearchInterestDialogComponent } from './research-interest-dialog/research-interest-dialog.component';

@Component({
  selector: 'ngx-research-interest',
  templateUrl: './research-interest.component.html',
  styleUrls: ['./research-interest.component.scss'],
})
export class ResearchInterestComponent implements OnDestroy{

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: false,
    columns: {
      researchInterest: {
        title: 'Research Interest in pass 5 years',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  ResearchInterests: Subscription;
  researchInterests: IResearchInterest[];
  Disabled: Subscription;
  disabled: boolean = true;

  constructor(
    public profileService: ProfileService,
    public confirmService: ConfirmService,
  ) {
    this.ResearchInterests = this.profileService.data$.subscribe((data: IScienceProfile) => {
      if (data.experienceAndResearches) {
        this.researchInterests = data.experienceAndResearches.researchInterests;
      } else {
        this.researchInterests = [];
      }
      this.source.load(this.researchInterests);
    });
    this.Disabled = profileService.disable$.subscribe((disable) => {
      this.disabled = !disable;
    });
  }

  ngOnDestroy(): void {
    this.ResearchInterests.unsubscribe();
    this.Disabled.unsubscribe();
  }

  onRowSelect($event) {
    const index = this.researchInterests.indexOf($event.data);
    this.profileService.toggleDialogue(ResearchInterestDialogComponent,
      {data: $event.data, disable: this.disabled, del: !this.disabled})
      .subscribe((data) => {
        if (data === null) return;
        if (data === false) {
          this.researchInterests.splice(index, 1);
          this.source.load(this.researchInterests);
          return;
        }
        this.researchInterests[index] = data;
        this.source.load(this.researchInterests);
      });
  }

  onNew() {
    this.profileService.toggleDialogue(ResearchInterestDialogComponent,
      {data: {}, disable: false, del: false})
      .subscribe((data) => {
        if (data === null) return;
        this.researchInterests.unshift(data);
        this.source.load(this.researchInterests);
      });
  }

}
