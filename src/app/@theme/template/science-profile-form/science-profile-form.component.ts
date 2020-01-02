import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IScienceProfile } from '@ngx/models';
import { DataService } from './data.service';

@Component({
  selector: 'ngx-science-profile-form',
  templateUrl: './science-profile-form.component.html',
  styleUrls: ['./science-profile-form.component.scss'],
})
export class ScienceProfileFormComponent implements OnInit {

  @Input() ScienceProfile: IScienceProfile;
  @Input() Admin: boolean;

  @Output() Save = new EventEmitter<IScienceProfile>();

  editing: boolean = false;
  backupData: IScienceProfile;
  
  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit() {
    console.log('From SPF', this.ScienceProfile)
    this.dataService.setData(this.ScienceProfile)
    this.dataService.setStatus(false);
  }

  onEdit() {
    this.dataService.setStatus(true);
    this.editing = true;
    this.backupData = this.dataService.currentData();
  }

  onSave() {
    this.dataService.onSaved$.subscribe((data: IScienceProfile) => {
      this.ScienceProfile = data;
      this.ngOnInit();
      this.Save.emit(this.ScienceProfile);
    });
    this.editing = false;
  }

  onCancel() {
    this.ScienceProfile = this.backupData;
    this.ngOnInit();
    this.editing = false;
  }

}
