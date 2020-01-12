import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-research-interest-dialog',
  templateUrl: './research-interest-dialog.component.html',
  styleUrls: ['./research-interest-dialog.component.scss']
})
export class ResearchInterestDialogComponent {

  public data;
  public disable;
  public del;

  constructor(
    protected ref: NbDialogRef<ResearchInterestDialogComponent>,
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
