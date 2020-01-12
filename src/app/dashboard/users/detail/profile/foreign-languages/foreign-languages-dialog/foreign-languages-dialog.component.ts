import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-foreign-languages-dialog',
  templateUrl: './foreign-languages-dialog.component.html',
  styleUrls: ['./foreign-languages-dialog.component.scss']
})
export class ForeignLanguagesDialogComponent {

  public data;
  public disable;
  public del;

  constructor(
    protected ref: NbDialogRef<ForeignLanguagesDialogComponent>,
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
