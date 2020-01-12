import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-education-dialog',
  templateUrl: './education-dialog.component.html',
  styleUrls: ['./education-dialog.component.scss'],
})
export class EducationDialogComponent {

  public data;
  public disable;
  public del;

  constructor(
    protected ref: NbDialogRef<EducationDialogComponent>,
  ) {}

  cancel() {
    this.ref.close(null);
  }

  confirm() {
    this.ref.close(this.data);
  }

  delete() {
    this.ref.close(false);
  }

}
