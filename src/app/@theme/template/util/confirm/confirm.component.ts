import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ConfirmService } from '../confirm.service';

@Component({
  selector: 'ngx-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {

  private content: string;
  constructor(
    protected ref: NbDialogRef<ConfirmComponent>,
    protected _content: ConfirmService) {
      this.content = this._content.content;
  }

  cancel() {
    this.ref.close(false);
  }

  confirm() {
    this.ref.close(true);
  }
}
