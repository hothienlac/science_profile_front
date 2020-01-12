import { Component, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { IPublishedResearch, IPublishedResearches, IScienceProfile } from '@ngx/models';
import { ProfileService } from '../../profile.service';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';
import { TotalResearchesDialogComponent } from './total-researches-dialog/total-researches-dialog.component';

@Component({
  selector: 'ngx-total-researches',
  templateUrl: './total-researches.component.html',
  styleUrls: ['./total-researches.component.scss'],
})
export class TotalResearchesComponent implements OnDestroy {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: false,
    columns: {
      authors: {
        title: 'Authors',
        type: 'string',
      },
      publishedYear: {
        title: 'PublishedYear',
        type: 'string',
      },
      project: {
        title: 'Project',
        type: 'string',
      },
      publisher: {
        title: 'Publisher',
        type: 'string',
      },
      issn_isbn: {
        title: 'ISSN - ISBN',
        type: 'string',
      },
      file: {
        title: 'File',
        type: 'string',
      },
      note: {
        title: 'Note',
        type: 'string',
      },
    },
  };

  source_isi: LocalDataSource = new LocalDataSource();
  source_otherInternational: LocalDataSource = new LocalDataSource();
  source_national: LocalDataSource = new LocalDataSource();
  source_conference: LocalDataSource = new LocalDataSource();
  source_other: LocalDataSource = new LocalDataSource();

  TotalResearches: Subscription;
  isi: IPublishedResearch[];
  otherInternational: IPublishedResearch[];
  national: IPublishedResearch[];
  conference: IPublishedResearch[];
  other: IPublishedResearch[];

  Disabled: Subscription;
  disabled: boolean = true;

  constructor(
    public profileService: ProfileService,
    public confirmService: ConfirmService,
  ) {
    this.TotalResearches = this.profileService.data$.subscribe((data: IScienceProfile) => {
      if (data.experienceAndResearches) {
        this.isi = data.experienceAndResearches.publishedResearches.ISIPaper;
        this.otherInternational = data.experienceAndResearches.publishedResearches.otherInternationalPaper;
        this.national = data.experienceAndResearches.publishedResearches.nationalPaper;
        this.conference = data.experienceAndResearches.publishedResearches.conferenceReports;
        this.other = data.experienceAndResearches.publishedResearches.other;
      } else {
        this.isi = [];
        this.otherInternational = [];
        this.national = [];
        this.conference = [];
        this.other = [];
      }
      this.source_isi.load(this.isi);
      this.source_otherInternational.load(this.otherInternational);
      this.source_national.load(this.national);
      this.source_conference.load(this.conference);
      this.source_other.load(this.other);
    });
    this.Disabled = profileService.disable$.subscribe((disable) => {
      this.disabled = !disable;
    });
  }

  ngOnDestroy(): void {
    this.TotalResearches.unsubscribe();
    this.Disabled.unsubscribe();
  }

  onRowSelect($event, from: string) {

    if (from === 'isi') {
      const index = this.isi.indexOf($event.data);
      this.profileService.toggleDialogue(TotalResearchesDialogComponent,
        {data: $event.data, disable: this.disabled, del: !this.disabled})
        .subscribe((data) => {
          if (data === null) return;
          if (data === false) {
            this.isi.splice(index, 1);
            this.source_isi.load(this.isi);
            return;
          }
          this.isi[index] = data;
          this.source_isi.load(this.isi);
        });
    } else if (from === 'otherInternational') {
      const index = this.otherInternational.indexOf($event.data);
      this.profileService.toggleDialogue(TotalResearchesDialogComponent,
        {data: $event.data, disable: this.disabled, del: !this.disabled})
        .subscribe((data) => {
          if (data === null) return;
          if (data === false) {
            this.otherInternational.splice(index, 1);
            this.source_otherInternational.load(this.otherInternational);
            return;
          }
          this.otherInternational[index] = data;
          this.source_otherInternational.load(this.otherInternational);
        });
    } else if (from === 'national') {
      const index = this.national.indexOf($event.data);
      this.profileService.toggleDialogue(TotalResearchesDialogComponent,
        {data: $event.data, disable: this.disabled, del: !this.disabled})
        .subscribe((data) => {
          if (data === null) return;
          if (data === false) {
            this.national.splice(index, 1);
            this.source_national.load(this.national);
            return;
          }
          this.national[index] = data;
          this.source_national.load(this.national);
        });
    } else if (from === 'conference') {
      const index = this.conference.indexOf($event.data);
      this.profileService.toggleDialogue(TotalResearchesDialogComponent,
        {data: $event.data, disable: this.disabled, del: !this.disabled})
        .subscribe((data) => {
          if (data === null) return;
          if (data === false) {
            this.conference.splice(index, 1);
            this.source_otherInternational.load(this.conference);
            return;
          }
          this.conference[index] = data;
          this.source_otherInternational.load(this.conference);
        });
    } else if (from === 'other') {
      const index = this.other.indexOf($event.data);
      this.profileService.toggleDialogue(TotalResearchesDialogComponent,
        {data: $event.data, disable: this.disabled, del: !this.disabled})
        .subscribe((data) => {
          if (data === null) return;
          if (data === false) {
            this.other.splice(index, 1);
            this.source_otherInternational.load(this.other);
            return;
          }
          this.other[index] = data;
          this.source_otherInternational.load(this.other);
        });
    }
    return;
  }

  onNew() {
    this.profileService.toggleDialogue(TotalResearchesDialogComponent,
      {data: {}, disable: false, del: false})
      .subscribe((data) => {
        if (data === null) return;

        if (data.type === 'isi') {
          this.isi.unshift(data);
          this.source_isi.load(this.isi);
        } else if (data.type === 'otherInternational') {
          this.otherInternational.unshift(data);
          this.source_otherInternational.load(this.otherInternational);
        } else if (data.type === 'national') {
          this.national.unshift(data);
          this.source_national.load(this.national);
        } else if (data.type === 'conference') {
          this.conference.unshift(data);
          this.source_conference.load(this.conference);
        } else if (data.type === 'other') {
          this.other.unshift(data);
          this.source_other.load(this.other);
        }
      });
  }

}
