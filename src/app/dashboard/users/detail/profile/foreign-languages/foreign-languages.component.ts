import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { ProfileService } from '../profile.service';
import { ConfirmService } from 'src/app/@theme/template/util/confirm.service';
import { IScienceProfile, IForeignLanguage } from '@ngx/models';
import { ForeignLanguagesDialogComponent } from './foreign-languages-dialog/foreign-languages-dialog.component';

@Component({
  selector: 'ngx-foreign-languages',
  templateUrl: './foreign-languages.component.html',
  styleUrls: ['./foreign-languages.component.scss']
})
export class ForeignLanguagesComponent {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: false,
    columns: {
      language: {
        title: 'Language',
        type: 'string',
      },
      reading: {
        title: 'Reading',
        type: 'string',
      },
      writing: {
        title: 'Writing',
        type: 'string',
      },
      speaking: {
        title: 'Speaking',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  ForeignLanguage: Subscription;
  foreignLanguage: IForeignLanguage[];
  Disabled: Subscription;
  disabled: boolean = true;

  constructor(
    public profileService: ProfileService,
    public confirmService: ConfirmService,
  ) {
    this.ForeignLanguage = this.profileService.data$.subscribe((data: IScienceProfile) => {
      if (data.foreignLanguages) {
        this.foreignLanguage = data.foreignLanguages;
      } else {
        this.foreignLanguage = [];
      }
      this.source.load(this.foreignLanguage);
    });
    this.Disabled = profileService.disable$.subscribe((disable) => {
      this.disabled = !disable;
    });
  }

  ngOnDestroy(): void {
    this.ForeignLanguage.unsubscribe();
    this.Disabled.unsubscribe();
  }

  onRowSelect($event) {
    const index = this.foreignLanguage.indexOf($event.data);
    this.profileService.toggleDialogue(ForeignLanguagesDialogComponent,
      {data: $event.data, disable: this.disabled, del: !this.disabled})
      .subscribe((data) => {
        if (data === null) return;
        if (data === false) {
          this.foreignLanguage.splice(index, 1);
          this.source.load(this.foreignLanguage);
          return;
        }
        this.foreignLanguage[index] = data;
        this.source.load(this.foreignLanguage);
      });
  }

  onNew() {
    this.profileService.toggleDialogue(ForeignLanguagesDialogComponent,
      {data: {}, disable: false, del: false})
      .subscribe((data) => {
        if (data === null) return;
        this.foreignLanguage.unshift(data);
        this.source.load(this.foreignLanguage);
      });
  }

}
