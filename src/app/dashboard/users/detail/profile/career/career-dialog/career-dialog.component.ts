import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-career-dialog',
  templateUrl: './career-dialog.component.html',
  styleUrls: ['./career-dialog.component.scss'],
})
export class CareerDialogComponent {

  public data;
  public disable;
  public del;

  constructor(
    protected ref: NbDialogRef<CareerDialogComponent>,
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
