import { Component, OnInit, OnDestroy } from '@angular/core';
import { IExperienceAndResearches, IScienceProfile, IResearchInterest, ILatestPublishedResearch } from '@ngx/models';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { ConfirmService } from '../../util/confirm.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-experience-and-reserches',
  templateUrl: './experience-and-reserches.component.html',
  styleUrls: ['./experience-and-reserches.component.scss'],
})
export class ExperienceAndReserchesComponent implements OnInit, OnDestroy {

  settings = {

    interests: {
      actions: false,
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmEdit: true,
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      hideSubHeader: false,
      columns: {
        researchInterest: {
          title: 'Research Interest in pass 5 years',
          type: 'string',
        },
      },
    },

    latestPublishedResearches: {
      actions: false,
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmEdit: true,
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
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
    },

    publishedResearches: {
      actions: false,
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmEdit: true,
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
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
    },

  };


  source = {
    interests: new LocalDataSource(),
    latestPublishedResearches: new LocalDataSource(),

    publishedResearches: {
      ISIPaper: new LocalDataSource(),
      otherInternationalPaper: new LocalDataSource(),
      nationalPaper: new LocalDataSource(),
      conferenceReports: new LocalDataSource(),
      other: new LocalDataSource(),
    },
  };

  ExperienceAndResearches: Subscription;
  experienceAndResearches: IExperienceAndResearches;
  disabled: boolean = true;

  constructor(
    public dataService: DataService,
    public confirmService: ConfirmService,
  ) {
    this.experienceAndResearches = {};
    this.ExperienceAndResearches = this.dataService.data$.subscribe((data: IScienceProfile) => {
      if (data.experienceAndResearches) {

        this.experienceAndResearches = data.experienceAndResearches;
        this.source.interests
            .load(this.experienceAndResearches.researchInterests);
        this.source.latestPublishedResearches
            .load(this.experienceAndResearches.latestPublishedResearches);
        this.source.publishedResearches.ISIPaper
            .load(this.experienceAndResearches.publishedResearches.ISIPaper);
        this.source.publishedResearches.otherInternationalPaper
            .load(this.experienceAndResearches.publishedResearches.otherInternationalPaper);
        this.source.publishedResearches.nationalPaper
            .load(this.experienceAndResearches.publishedResearches.nationalPaper);
        this.source.publishedResearches.conferenceReports
            .load(this.experienceAndResearches.publishedResearches.conferenceReports);
        this.source.publishedResearches.other
            .load(this.experienceAndResearches.publishedResearches.other);
      }
      else
        this.experienceAndResearches = {};
    });
    dataService.disable$.subscribe((disable) => {
      this.disabled = disable;
      this.settings.interests.actions = disable;
      this.settings.latestPublishedResearches.actions = disable;
      this.settings.publishedResearches.actions = disable;
    });
  }

  onDeleteConfirm(event): void {
    this.confirmService.confirm('Are you sure to Delete?').subscribe((confirm) => {
      if (confirm)
        event.confirm.resolve();
      else
        event.confirm.reject();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.ExperienceAndResearches.unsubscribe();
  }

}
