import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-latest-researches-dialog',
  templateUrl: './latest-researches-dialog.component.html',
  styleUrls: ['./latest-researches-dialog.component.scss']
})
export class LatestResearchesDialogComponent {

  public data;
  public disable;
  public del;

  constructor(
    protected ref: NbDialogRef<LatestResearchesDialogComponent>,
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
