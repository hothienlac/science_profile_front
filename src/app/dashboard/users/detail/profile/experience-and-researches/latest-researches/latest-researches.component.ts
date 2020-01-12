import { Component, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { IScienceProfile, ILatestPublishedResearch } from '@ngx/models';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';
import { ProfileService } from '../../profile.service';
import { Subscription } from 'rxjs';
import { LatestResearchesDialogComponent } from './latest-researches-dialog/latest-researches-dialog.component';

@Component({
  selector: 'ngx-latest-researches',
  templateUrl: './latest-researches.component.html',
  styleUrls: ['./latest-researches.component.scss'],
})
export class LatestResearchesComponent implements OnDestroy {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: false,
    columns: {
      project: {
        title: 'Project',
        type: 'string',
      },
      sponsor: {
        title: 'Sponsor',
        type: 'string',
      },
      time: {
        title: 'Time',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  ResearchInterests: Subscription;
  researchInterests: ILatestPublishedResearch[];
  Disabled: Subscription;
  disabled: boolean = true;

  constructor(
    public profileService: ProfileService,
    public confirmService: ConfirmService,
  ) {
    this.ResearchInterests = this.profileService.data$.subscribe((data: IScienceProfile) => {
      if (data.experienceAndResearches) {
        this.researchInterests = data.experienceAndResearches.latestPublishedResearches;
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
    this.profileService.toggleDialogue(LatestResearchesDialogComponent,
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
    this.profileService.toggleDialogue(LatestResearchesDialogComponent,
      {data: {}, disable: false, del: false})
      .subscribe((data) => {
        if (data === null) return;
        this.researchInterests.unshift(data);
        this.source.load(this.researchInterests);
      });
  }

}
